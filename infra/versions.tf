terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote state in S3 with native S3 locking (use_lockfile, no DynamoDB).
  # TODO(before `tofu init`): create this state bucket (versioned + encrypted)
  # and replace ACCOUNT_ID with the target AWS account number.
  backend "s3" {
    bucket       = "winchester-tofu-state-ACCOUNT_ID"
    key          = "winchester-storage/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
