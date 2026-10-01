# Infrastructure (OpenTofu)

Infrastructure-as-code for the static site `winchesterrvandboatstorage.com`: a
private S3 bucket served through CloudFront (Origin Access Control) with a
DNS-validated ACM certificate and Route53 alias records, plus an OIDC role the
CI deploy workflow assumes (no long-lived AWS keys).

> **Status: live.** The `Infra` workflow plans on pull requests and applies on
> merge to `main`. The bootstrap and cutover steps below are kept for reference
> (e.g. rebuilding the stack in a new account).

## Resources

| File            | Resources |
| --------------- | --------- |
| `s3.tf`         | Private S3 bucket + public-access block + CloudFront-only bucket policy |
| `cloudfront.tf` | Security-headers policy + Origin Access Control + CloudFront distribution |
| `acm.tf`        | ACM cert (us-east-1) + Route53 DNS validation (auto-renews) |
| `dns.tf`        | Route53 A/AAAA alias records for apex + www |
| `deploy-role.tf`| OIDC role for the CI deploy workflow (scoped to `main`) |
| `variables.tf`  | `aws_region`, `domain_name`, `subject_alternative_names`, `github_repository` |
| `outputs.tf`    | Bucket name, distribution ID, CloudFront domain, cert ARN, deploy role ARN |

## Before first `tofu init` (bootstrap — one time)

1. **State bucket** — create a versioned, encrypted S3 bucket for remote state,
   then set its real name in `versions.tf` (replace `ACCOUNT_ID`).
2. **GitHub OIDC provider** — ensure the account has an IAM OIDC provider for
   `token.actions.githubusercontent.com` (`deploy-role.tf` reads it as a data
   source). Create it once if missing.
3. **Tofu runner role** — the `infra.yml` workflow assumes an OIDC role with
   permissions to manage these resources. This role is created **out-of-band**
   (not managed by Tofu — it's what runs Tofu). Trust is in the committed
   `github-oidc-trust-policy.json`; permissions are in the gitignored
   `iam-policy.json`. Bootstrap it once:

   ```bash
   aws iam create-role --role-name winchester-github-actions-tofu \
     --assume-role-policy-document file://github-oidc-trust-policy.json
   aws iam put-role-policy --role-name winchester-github-actions-tofu \
     --policy-name tofu-permissions --policy-document file://iam-policy.json
   ```

   The role ARN is hardcoded in `.github/workflows/infra.yml` (an ARN is an
   identifier, not a secret, so it need not be stored as a repo secret — and
   hardcoding lets Dependabot PRs assume it too, since Actions secrets are
   withheld from Dependabot runs). If you recreate the role under a different
   name/account, update the `role-to-assume` value there. (Locally you can just
   use admin creds.)
4. Confirm the Route53 **hosted zone** for the domain already exists.

## Apply

```bash
cd infra
tofu init      # first time only
tofu plan
tofu apply     # ~5–10 min (ACM validation + CloudFront deploy)
```

## Cut over from the existing (pre-IaC) resources

This stack uses deterministic names that will **not** collide with the current
hand-created bucket/distribution, so it stands up in parallel. Recommended
new-stack cutover (mirrors how timarioto.com was migrated):

```bash
# 1. Apply, then push content to the NEW bucket and verify via the CloudFront
#    domain BEFORE touching DNS:
tofu output                       # note s3_bucket + cloudfront_distribution_id
cd .. && bun run build
aws s3 sync ./dist/ s3://<s3_bucket>/ --delete
#    open https://<cloudfront_domain_name> and confirm the site renders.

# 2. The aws_route53_record resources use allow_overwrite, so `tofu apply`
#    already repointed apex + www at the new distribution. Verify DNS resolves.

# 3. Point CI at the new stack (three secrets):
gh secret set AWS_S3_BUCKET               --repo tarioto/winchester-storage --body "<s3_bucket>"
gh secret set AWS_CLOUDFRONT_DISTRIBUTION_ID --repo tarioto/winchester-storage --body "<distribution_id>"
gh secret set AWS_DEPLOY_ROLE_ARN         --repo tarioto/winchester-storage --body "<deploy_role_arn>"
```

> Alternative: if you'd rather keep the exact existing bucket/distribution, run
> `tofu import` for each resource instead of creating new ones — but the names in
> this config must first be edited to match what already exists, and `plan` must
> read empty before any `apply`. The new-stack cutover above is lower-risk.

## Remove the OLD resources (after the new site is verified)

The old bucket, distribution, and any old cert are **not** in OpenTofu state, so
`tofu destroy` won't touch them. Remove them manually (find IDs from the old
GitHub secrets / AWS console):

```bash
# 1. Disable, then delete the old CloudFront distribution (must be disabled first)
# 2. Empty + delete the old S3 bucket:  aws s3 rb s3://<old-bucket> --force
# 3. Delete the old ACM cert once nothing references it (us-east-1)
```
