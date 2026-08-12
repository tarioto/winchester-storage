terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote state in S3 with native S3 locking (use_lockfile, no DynamoDB).
  # Bucket is versioned + encrypted (created out-of-band during bootstrap).
  backend "s3" {
    bucket       = "winchester-tofu-state-322859817636"
    key          = "winchester-storage/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
