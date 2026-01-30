# CLAUDE.md

This file provides guidance for AI assistants (like Claude) working on this project.

## Project Overview

Onyx Integrations website - a Next.js-based website.

## Git Workflow Rules

**IMPORTANT**: Follow these rules for ALL code changes.

### Before Making Any Changes

1. **Check your current branch**
   ```bash
   git status
   git branch
   ```

2. **If on `main`/`master`: STOP and create a branch first**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <type>/<description>-claude
   ```

3. **Always use the `-claude` suffix** on branch names to indicate AI-assisted work

### Branch Naming

Use this format: `<type>/<short-description>-claude`

Types:
- `feature/` - New features
- `fix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation
- `chore/` - Maintenance

Examples:
- `feature/add-contact-form-claude`
- `fix/nav-overflow-claude`
- `docs/update-readme-claude`

### Commit Guidelines

1. **Commit incrementally** with clear messages
2. **Never force push** or rewrite history on shared branches
3. **Use descriptive commit messages**:
   ```
   <type>: <short summary>

   - Detail 1
   - Detail 2
   ```

### What NOT to Do

- Never commit directly to `main`/`master`
- Never force push (`git push --force`)
- Never rebase shared branches
- Never skip creating a branch

## AI Attribution Preference

**This project ENABLES AI co-author attribution.**

Add this line to commit messages:
```
Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
/
├── pages/          # Next.js pages
├── components/     # React components
├── public/         # Static assets
├── styles/         # CSS/styling
└── content/        # Markdown content (if applicable)
```

## Code Style

- Follow existing patterns in the codebase
- Use TypeScript where applicable
- Keep components small and focused
- Write meaningful commit messages

## Before Submitting Changes

1. Ensure the code builds: `npm run build`
2. Test locally: `npm run dev`
3. Create a pull request with a clear description
4. Request review from a team member
