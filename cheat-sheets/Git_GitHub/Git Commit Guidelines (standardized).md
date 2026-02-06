For Projects (software, hardware, or collaborative work)
### Commit message format
```text
<subject/short summary> (imperative mood, ≤ 50 chars)

<body> (optional):
- What changed in more detail
- Why it was needed

<footer> (optional):
- Any side effects, references to GitHub/GitLab issues that this commit Closes
```

### Subject/Short Summary
1. Use **lightweight tags** or prefixes to group commits:
	- **Add** - new features, files, or functionality
	- **Fix** - bug fixes or error corrections
	- **Update** - improvements, tweaks, or enhancements
	- **Refactor** - code restructuring without changing behavior
	- **Docs:** - documentation changes only
	- **Test:** - adding or updating tests
	- **Chore:** - maintenance tasks (dependencies, configs, CI/CD)
2. **Imperative mood**: "Add note on X" not "Added note on X"
3. **Keep summaries ≤ 50 characters** for readability in logs
4. **Capitalize the first letter**
5. **No period (.) at the end**
6. **Avoid noise**: Don't include "minor change" or "misc updates". Be specific.
7. **One commit = one logical change**: Don't mix unrelated fixes/features/files.

***Note for a "remove" commit***
There is no dedicated `remove` type. Pick the existing type that matches your intent:
- **`refactor`** — removing code as cleanup/refactoring (no behavioral change)  
    *Example*: `refactor: remove unused utils`
- **`fix`** — removal that fixes a bug or incorrect behavior  
    *Example*: `fix: remove duplicated event handler causing double submit`
- **`chore`** — removing tooling, config, or dependencies  
    *Example*: `chore(deps): remove deprecated package xyz`
- **`docs`** — removing or restructuring documentation

> ⚠️ If the removal is a breaking change (removes a public API or changes behavior), mark it as breaking — either with `!` in the header (e.g., `refactor!: remove v1 API`) or add a `BREAKING CHANGE:` footer describing the impact.

Recommendation: default to **`refactor`** for most removals, unless it clearly fixes a bug or is maintenance/tooling-related.
### Body
- Use imperative mood
- WHAT changed in more detail
- WHY it was needed

### Footer
- Should contain any information about **Breaking Changes**
- References to GitHub/GitLab issues that this commit **Closes**

### Examples
```text
Fix login validation bug

Adjusted regex to handle edge cases in email input.
Added unit tests to cover invalid formats.

Closes #9
```

```text
Add user profile page
```

```text
Refactor API client for clarity
```

```text
Update CI pipeline to run lint checks
```

```text
Docs: expand README with setup instructions
```

```text
Test: add coverage for payment flow
```
