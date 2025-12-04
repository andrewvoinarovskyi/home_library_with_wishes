# Git Conventions

## Branch Naming

```
<type>/<short-description>
```

**Types:**
- `feature/` - new features
- `fix/` - bug fixes
- `refactor/` - code refactoring
- `docs/` - documentation changes
- `test/` - test additions/changes

**Examples:**
```bash
feature/add-wishlist-filter
fix/cors-configuration
refactor/api-endpoints
docs/update-setup-instructions
```

---

## Commit Messages

### Format
```
<type>: <short summary>

<optional detailed description>
```

### Types
- `feat:` - new feature
- `fix:` - bug fix
- `refactor:` - code refactoring
- `docs:` - documentation
- `test:` - tests
- `perf:` - performance improvement

### Examples
```bash
feat: add wishlist filtering by priority
fix: resolve CORS configuration for Docker
refactor: simplify database migration setup
docs: update local installation instructions
test: add specs for collectible items controller
```

### Rules
- Use imperative mood ("add" not "added")
- Keep summary under 50 characters
- Do not capitalize first letter
- No period at the end
- Add detailed description if needed (separated by blank line) (for extended description, not for few commit messages)

---

## Commit Best Practices

### Good Commits
- ✅ One logical change per commit
- ✅ Related files grouped together
- ✅ Clear, descriptive messages
- ✅ Small, frequent commits

### Bad Commits
- ❌ Multiple unrelated changes
- ❌ Vague messages like "fix stuff"
- ❌ Committing broken code (except WIP commits)
- ❌ Large commits with many changes

### Example Workflow
```bash
# Good: separate commits for different concerns
git add backend/config/cors.rb
git commit -m "fix: update CORS configuration for local development"

git add frontend/vite.config.js
git commit -m "fix: change proxy target to localhost for local setup"

# Bad: everything in one commit
git add .
git commit -m "fix stuff"
```

---

## File Exclusions

**Never commit:**
- `.env` files with secrets
- `tmp/` directory
- `log/` files
- `node_modules/`
- `vendor/bundle/`
- IDE configuration (`.idea/`, `.vscode/`)

**Check `.gitignore`** - ensure sensitive files are excluded.

---

## Merge vs Rebase

**Use merge:**
- When working on shared branches
- For pull requests (preserves history)

**Use rebase:**
- For cleaning up local commits before push
- When working alone on feature branch

```bash
# Interactive rebase (clean up commits)
git rebase -i HEAD~3

# Rebase on main
git rebase origin/main
```

---

## Useful Commands (if you are working with bash)

```bash
# View commit history
git log --oneline --graph

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Checkout specific file from another branch
git checkout main -- path/to/file
```

