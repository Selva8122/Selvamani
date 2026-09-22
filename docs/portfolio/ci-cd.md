---
sidebar_position: 4
title: CI/CD and doc-as-code
---

# CI/CD and doc-as-code

A modern documentation practice should be treated like any other production artifact.

## Doc-as-code principles

- Write content in Markdown or MDX
- Store it in Git for review and versioning
- Use pull requests for content changes and approvals
- Automate validation, build, and deployment
- Keep the documentation site aligned with the product lifecycle

## Sample workflow

1. Update content in a feature branch
2. Open a pull request for documentation review
3. Run linting and site build checks in CI
4. Merge only after validation passes
5. Publish the updated docs automatically to the target environment

## Why this matters

This reduces manual publishing errors, increases visibility into documentation changes, and creates a repeatable system for scaling content quality.
