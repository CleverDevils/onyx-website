# Contributing to Onyx Website

This document outlines our Git workflow and collaboration guidelines for all contributors, including both human developers and AI assistants.

## Git Strategy: GitHub Flow

We use a simplified GitHub Flow branching strategy. All changes go through feature branches and pull requests.

## Branch Naming Convention

### Format

```
<type>/<short-description>[-<author>]
```

### Types

| Type | Use Case |
|------|----------|
| `feature/` | New features or enhancements |
| `fix/` | Bug fixes |
| `hotfix/` | Urgent production fixes |
| `refactor/` | Code refactoring (no behavior change) |
| `docs/` | Documentation only |
| `chore/` | Maintenance tasks (deps, configs) |

### Author Suffix

- **Human contributors**: Optional, e.g., `feature/user-auth` or `feature/user-auth-brian`
- **AI assistants**: Include identifier, e.g., `feature/user-auth-claude`

### Examples

- `feature/add-contact-form`
- `fix/nav-mobile-overflow`
- `feature/api-integration-claude`
- `hotfix/security-patch-cam`

## Workflow Rules

### Rule 1: Never commit directly to `main`/`master`

All changes go through feature branches and pull requests.

### Rule 2: Create a branch before ANY code changes

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Rule 3: Keep branches focused and small

- One feature or fix per branch
- Aim for PRs that can be reviewed quickly

### Rule 4: Sync before starting work

Always pull the latest `main` before creating a new branch.

### Rule 5: Use descriptive commit messages

```
<type>: <short summary>

- Detail 1
- Detail 2
```

Example:
```
feature: add contact form validation

- Add email format validation
- Add required field checks
- Display inline error messages
```

### Rule 6: Delete branches after merge

Merged branches should be deleted to keep the repo clean. GitHub preserves the history and can restore deleted branches if needed.

## Pull Request Process

1. **Push your branch** to the remote repository
2. **Create a PR** with a clear title and description
3. **Request review** from at least one collaborator
4. **Address feedback** with additional commits
5. **Merge** using a regular merge commit (preserves history)
6. **Delete** the feature branch after merge

### PR Description Template

```markdown
## Summary
Brief description of what this PR does.

## Changes
- Change 1
- Change 2

## Testing
How was this tested?

## Screenshots (if applicable)
```

## Handling Conflicts

When multiple collaborators work simultaneously:

1. **Communicate** via PR comments or team chat
2. **Pull main frequently** into long-running branches
3. **Small, frequent PRs** reduce conflict likelihood
4. **If conflicts occur**: the person merging resolves them

## Getting Started

### First-time Setup

1. Clone the repository
2. Read this document and `CLAUDE.md`
3. Create a feature branch for your work
4. Make your changes
5. Submit a pull request

### Making Changes

```bash
# 1. Ensure you're on main and up to date
git checkout main
git pull origin main

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git add <files>
git commit -m "feature: add your feature"

# 4. Push and create PR
git push -u origin feature/your-feature-name
```

## Questions?

If you have questions about the workflow, open an issue or reach out to the team.
