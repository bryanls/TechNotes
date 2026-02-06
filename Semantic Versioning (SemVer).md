Is a standardized way of numbering software releases that communicates the scope of changes clearly.

A version number follow the format: MAJOR.MINOR.PATCH

- MAJOR - Incremented when you make incompatible API changes.
	*Example:* `2.0.0` means the software has breaking cahnges compared to `1.x.x`
- MINOR - Incremented when you add functionality in a backward compatible way.
	*Example:* `1.5.0` adds new features but still works with `1.4.x`
- PATCH - Incremented when you make backward compatible bug fixes.
	*Example:* `1.5.2` fixes issues without adding features or breaking compatibility

### Extensions
Semantic Versioning also allows **extra labels**:
- **Pre-release labels:** indicate unstable versions before final release. It is added after the version number with a hyphen.
	*Example:* `1.0.0-alpha`, `1.0.0-beta`, `1.0.0-rc.1`
- **Build metadata:** adds build information without affecting version precedence.
	*Example:* `1.0.0+build2026`

#### Common Pre-release Labels
- **alpha:** Earliest stage, experimental, unstable.
	*Example:* `1.0.0-alpha`
- **beta:** More stable than alpha, but still under testing.
	*Example:* `1.0.0-beta.3`
- **rc (release candidate):** Almost ready for final release, only critical fixes expected.
	*Example:* `1.0.0-rc.1`

*Things to consider:* 
- Never deploy pre-release versions to production unless you're prepared for instability.
- Document what changed in each pre-release so testers know what to focus on.

### External Resources
[Semantic Versioning 2.0.0](https://semver.org/)
