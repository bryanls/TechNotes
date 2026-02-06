## Commit Message Format

The commit message should be structured as follows: 
```text
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- **feat**: A new feature (this correlates with **MINOR** in [[Semantic Versioning (SemVer)|SemVer]])
- **fix**: Patches a bug (this correlates with **PATCH** in [[Semantic Versioning (SemVer)|SemVer]])
- **doc**: Documentation changes only
- **style**: No logic changes (formatting, white-space, missing semi-colons, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: A code change that improves performance
- **test**: Adding or updating tests
- **build**: Changes to build system, dependencies, or CI/CD
- **ci**: Changes to CI configuration files and scripts
- **chore**: Routine tasks, maintenance, or tooling changes
- **revert**: Reverting a previous commit

#### Revert
If the commit reverts a previous commit, it should begin with `revert: `,  followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash.>`, where the hash is the SHA of the commit being reverted.

***Note for a "remove" commit***
There is no dedicated `remove` type. Pick the existing type that matches your intent:
- **`refactor`** — removing code as cleanup/refactoring (no behavioral change)  
    *Example*: `refactor: remove unused utils`
- **`fix`** — removal that fixes a bug or incorrect behavior  
    *Example*: `fix: remove duplicated event handler causing double submit`
- **`chore` / `build` / `ci`** — removing tooling, config, or dependencies  
    *Example*: `chore(deps): remove deprecated package xyz`
- **`docs`** — removing or restructuring documentation

> ⚠️ If the removal is a breaking change (removes a public API or changes behavior), mark it as breaking — either with `!` in the header (e.g., `refactor!: remove v1 API`) or add a `BREAKING CHANGE:` footer describing the impact.

Recommendation: default to **`refactor`** for most removals, unless it clearly fixes a bug or is maintenance/tooling-related.

### Scope (optional)
Add a scope in parentheses to clarify the area affected.

### Subject
- Use imperative mood, present tense: "change" (not "changed" nor "changes")
- Don't capitalize the first letter (except when not using conventional commits)
- No period (.) at the end
- Keep subject ≤ 50 characters

### Body (optional)
- Use imperative mood, present tense
- Explain WHAT and WHY, not just HOW (should include the motivation for the change and contrast this with previous behaviour)
- Preferably wrap at 72 characters

### Footer (optional)
- Should contain any information about **Breaking Changes**
- The place to reference GitHub/GitLab issues that this commit **Closes**

#### Breaking Changes:
Introduces a breaking API change.
- Use `! after type/scope or add a `BREAKING CHANGE:` footer.
- Correlates with **MAJOR** in [[Semantic Versioning (SemVer)|SemVer]]

#### Referencing issues
Closed bugs should be listed on a separate line in the footer prefixed with `Closes` keyword like this:
```text
Closes #234
```

or in case of multiple issues: 
```text
Closes #123, #245, #963
```

### Examples:
```text
feat(auth): add JWT-based login
```

```text
fix(ui): correct button alignment
```

```text
docs(readme): update installation instructions
```

```text
style(css): reformat grid layout
```

```text
refactor(api): simplify error handling
```

```text
perf(db): optimize query execution
```

```text
test(auth): add unit tests for login
```

```text
build(deps): update webpack to v5
```

```text
ci(github-actions): add lint workflow
```

```text
chore: update .gitignore
```

```text
revert: feat(auth): add JWT-based login
```

```text
feat(api)!: remove deprecated endpoints

BREAKING CHANGE: old endpoints /v1/* are no longer supported.
```

```text
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss 
incoming responses other than from latest request.

Remove timeout which were used to mitigate the racing issue but are 
obsolete now.

Reviewed-by: X
Refs: #123
```
