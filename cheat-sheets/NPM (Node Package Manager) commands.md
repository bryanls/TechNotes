## Basic commands
```bash
npm init # Initialize a new project
npm init -y # or for a default setup

npm list # List installed packages
npm list -g --depth=0 # List globally installed packages
```

## Package Management
```bash
npm info <package-name> # **View package information**

npm install # **Install all dependencies listed in `package.json`**
npm install <package-name> # Install a package, it can be use to update to a specific version too
npm install -g <package-name> # Install a package globally
npm install <package-name> --save-dev # Install a package as a development dependency
npm install <package-name>@latest # To update a specific package to the latest version

npm uninstall <package-name> # Uninstall a package

npm outdated # Display a list of outdated packages, showing the current version, the wanted version (the latest version that satisfies the version range specified in your `package.json`), and the latest version available.

npm update # To update the packages to the latest version that satisfies the version ranges specified in your `package.json`
npm update <package-name> # Update a specific package
npm update --save-dev # To update all development dependencies

npm prune # **Remove extraneous packages**
```
**Global Installation:** Accessible from anywhere, used for command-line tools, not tied to a specific project.
**Development Dependency Installation:** Project-specific, used for tools and libraries needed during development, listed in `package.json` under `devDependencies`.
## Scripts
```bash
npm run <script-name> # **Run a script defined in `package.json`**
npm run <script-name> -- <args> # **Run a script with a specific environment variable**
```

## Configuration
```bash
npm config list # **View npm configuration**
npm config set <key> <value> # **Set a configuration value**
npm config get <key> # **Get a configuration value**
```

## Cache Management
```bash
npm cache clean --force # **Clear the npm cache**
```

## Versioning
```bash
npm -v # **Check npm version**
node -v # **Check Node.js version**
```

## Miscellaneous
```bash
npm install --package-lock-only # **Create a package-lock.json file**
npm audit # **Audit your project for vulnerabilities**
npm audit fix # **Fix vulnerabilities automatically**
```

## Help
```bash
npm help # **Get help for npm commands**
npm help <command> # **Get help for a specific command**
```