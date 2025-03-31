## Git

```shell
git --version
git config --global http://user.name 'myname'
git config --global http://user.email 'my@email'
git init # Initialize Local Git repository
git add <file> # Add file(s) to index (To start tracking the file changes)
git restore <file>  # To discard changes in working directory
git rm --cached <file>  # To unstage a file
git status # Check status of working tree
git log # Show commit logs
git log --oneline # Display each commit represented by its abbreviated commit hash followed by the commit message. Shorthand for "--pretty=oneline-abbrev-commit"
git commit -m "message" # Commit changes in index
git commit # Using this command alone will open the default text editor to write the commit message. This can be useful for writing long commit messages
git commit --amend -m "Updated commit message" # The previous commit will be replaced with a new commit that includes the updated changes. Be careful!
git branch # To see the current branches
git branch <branch-name>    # To create new branch
git branch -r # Remote-tracking branches to be listed
git branch -a # Shows both local and remote branches
git branch -d <branch-name> # To delete branch
git switch <branch-name>    # To switch between branches
git switch -c <branch-name> # Shortcut to create and switch to the new branch
git checkout <branch-name>  # Combination of git switch - git restore
git merge -m "message" <branch-name>
git tag # A tag in Git is a reference to a specific commit in the repository's history. It is often used to mark a particular point in the repository, such as a version release.
git tag <tag-name> # Lightweight tag. These are simply pointers to a specific commit and do not contain any additional information. If an annotation is not provided, it will simply add in the last commit message as the annotation.
git tag -a <tag-name> -m "message" # Annotated tag. These are more like full objects in the Git database. They can contain a message, the tagger's name, email, and date, and are generally used for marking releases.
git tag -n # Lists the existing tags along with their annotations
git tag [-d | --delete] <tag-name>
# Examples:
# 0.0.1            Fixes issues with oauth
# 0.0.2            Preps 0.0.2 release
# v1.0.0           Preps v1.0.0 (Preps -> abbreviation for "preparations", refers to the preparatory steps taken before a release)
# v10.0.1          Bumps v10.0.1 (Bumps -> refers to the act of incrementing the version number)
# v11.0.0          Updates README
# v11.0.0-alpha    Updates dependencies
# v11.0.0-alpha.1  Removes CHANGELOG
```

To add files to be untracked, use a .gitignore file:
```shell
log.txt # To untrack one single file
*.txt   # To untrack all files for one particular extension
dir/    # To exclde all files from one directory
```

## GitHub

```shell
git push # Push to Remote repository
git push origin --tags # Push tags to the remote repository
git pull # To update your Local branch
git clone # Clone repository into a new directory
git remote [-v | --verbose] # To display the list of remote repository currently connected to. Use -v to show remote url after name
git remote add <name> <URL> # To connect to a remote repository, usually <name> is set to 'origin'
git remote [remove | rm] <name> # All remote-tracking branches and configuration settings for the remote named <name> are removed

git push -u origin master # To push changes to remote repository into master branch
```