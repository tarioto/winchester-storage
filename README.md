# Winchester RV and Boat Storage

[![CI](https://github.com/tarioto/winchester-storage/actions/workflows/main.yml/badge.svg)](https://github.com/tarioto/winchester-storage/actions/workflows/main.yml)
[![Infra](https://github.com/tarioto/winchester-storage/actions/workflows/infra.yml/badge.svg)](https://github.com/tarioto/winchester-storage/actions/workflows/infra.yml)
[![Secret Scan](https://github.com/tarioto/winchester-storage/actions/workflows/secret-scan.yml/badge.svg)](https://github.com/tarioto/winchester-storage/actions/workflows/secret-scan.yml)

Source for **[winchesterrvandboatstorage.com](https://winchesterrvandboatstorage.com)**,
the marketing site for an RV, boat, and vehicle storage facility in Reno, Nevada.

It's a single-page static site: React 19 and Chakra UI v3, built with Bun,
served from a private S3 bucket through CloudFront, with the AWS
infrastructure defined in OpenTofu.

## Tech stack

| Area           | Tools |
| -------------- | ----- |
| UI             | [React 19](https://react.dev), [Chakra UI v3](https://chakra-ui.com), [Lucide](https://lucide.dev) icons, [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode |
| Build & dev    | [Bun](https://bun.sh) (bundler, dev server with HMR, test runner, package manager), TypeScript |
| Quality        | [Biome](https://biomejs.dev) (lint and format), [Knip](https://knip.dev) (unused files, exports, and dependencies), `bun test` with Testing Library and happy-dom |
| Hosting        | AWS S3 (private, Origin Access Control), CloudFront, ACM, Route 53 |
| Infrastructure | [OpenTofu](https://opentofu.org), with state in S3 |
| CI/CD          | GitHub Actions with OIDC (no long-lived AWS keys), Dependabot, TruffleHog and gitleaks secret scanning |

## Getting started

### Prerequisites

- [Bun](https://bun.sh) **1.3.14**, the version pinned in `package.json` (`packageManager`)
- Optional: [`pre-commit`](https://pre-commit.com) and [`gitleaks`](https://github.com/gitleaks/gitleaks) for local secret scanning

### Install and run

```bash
bun install
bun run dev        # dev server with hot reload; prints its URL
```

### Scripts

| Command           | What it does |
| ----------------- | ------------ |
| `bun run dev`     | Starts the Bun dev server (`dev.ts`) with HMR and serves `public/` |
| `bun run build`   | Type-checks (`tsc -b`) and bundles into `dist/` (`build.ts`) |
| `bun run preview` | Serves the built `dist/` locally |
| `bun run lint`    | Runs Biome lint and format checks |
| `bun run format`  | Applies Biome fixes and formatting |
| `bun run knip`    | Reports unused files, exports, and dependencies |
| `bun test`        | Runs the test suite |

### Local secret scanning (optional)

```bash
brew install pre-commit gitleaks
pre-commit install   # runs gitleaks on every commit
```

## Project structure

```
.
├── index.html            # HTML entry; Bun bundles from here
├── src/
│   ├── index.tsx         # React root
│   ├── theme.ts          # Chakra UI system and theme config
│   └── Components/
│       ├── App/          # Page composition and smoke test
│       ├── Home/         # Hero and contact details
│       ├── Map/          # Embedded Google Map
│       ├── Features/     # Facility features grid
│       ├── Gallery/      # Photo gallery
│       ├── Contact/      # Email and phone actions
│       ├── Footer/
│       └── ui/           # Chakra UI CLI snippets (provider, color mode) and the Glass wrapper
├── public/               # Copied verbatim into dist/ (images, favicon, manifest)
├── build.ts              # Production build (fingerprints assets under dist/assets/)
├── dev.ts                # Dev server
├── public-files.ts       # Bun plugin: leaves public/ URLs in index.html unbundled
├── infra/                # OpenTofu for S3, CloudFront, ACM, Route 53, deploy role
└── .github/              # CI, infra, and secret-scan workflows; Dependabot
```

## Build output and caching

`build.ts` writes the page entry (`index.html`) at the root of `dist/` and puts
all hashed JS, CSS, and assets under `dist/assets/`. The deploy relies on this
split:

- Root files (`index.html`, favicon, manifest, images) are uploaded with
  `Cache-Control: no-cache`, so each deploy shows up right away.
- `assets/*` is uploaded with `public, max-age=31536000, immutable`, since
  every filename includes a content hash.

## CI/CD

Three workflows live in `.github/workflows/`:

| Workflow            | Trigger | What it does |
| ------------------- | ------- | ------------ |
| **CI** (`main.yml`) | PRs and pushes to `main` | Install, lint, Knip, test, and build. On `main` it also syncs `dist/` to S3 and invalidates CloudFront. |
| **Infra** (`infra.yml`) | Changes under `infra/` | Runs `tofu fmt`, `validate`, and `plan`, then posts the plan as a PR comment. Applies on merge to `main`. Skipped for PRs from forks. |
| **Secret Scan** (`secret-scan.yml`) | PRs and pushes to `main` | Runs TruffleHog over the full history and fails on verified secrets. |

AWS access uses GitHub's OIDC provider, so there are no stored AWS keys. The
deploy role's trust policy only accepts tokens from `main` on this repository.
Its permissions are limited to writing to the site bucket and invalidating its
one distribution.

The deploy job reads these repository secrets:

| Secret | Value |
| ------ | ----- |
| `AWS_DEPLOY_ROLE_ARN` | `tofu output deploy_role_arn` |
| `AWS_S3_BUCKET` | `tofu output s3_bucket` |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `tofu output cloudfront_distribution_id` |

Dependabot opens weekly PRs. Minor and patch npm bumps come grouped in one PR,
majors come one per PR, and all GitHub Actions updates come grouped.

## Infrastructure

See [`infra/README.md`](infra/README.md) for the resource inventory, one-time
bootstrap steps (state bucket, OIDC provider, Tofu runner role), and how to
apply changes. In short:

```bash
cd infra
tofu init
tofu plan
```

In normal use, open a PR that changes `infra/`, review the plan comment, and
merge to apply it.

## Contributing

This is the site for a private business, so outside contributions aren't
expected. Bug reports and suggestions are welcome as issues. If you open a PR,
CI must pass: `bun run lint`, `bun run knip`, `bun test`, and `bun run build`.
