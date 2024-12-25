## Git

```shell
git --version
git config --global http://user.name 'myname'
git config --global http://user.email 'my@email'
git init # Initialize Local Git repository
git add <file> # Add file(s) to index (To start tracking the file changes)
git restore <file>  # To discard changes in working directory
git status # Check status of working tree
git commit -m "message" # Commit changes in index
git commit # Using this command alone will open the default text editor to write the commit message. This can be useful for writing long commit messages.
git commit --amend -m "Updated commit message" # The previous commit will be replaced with a new commit that includes the updated changes. Be careful!
git rm --cached <file>  # To unstage a file
git branch # To see the current branches
git branch <branch-name>    # To create new branch
git branch -r # Remote-tracking branches to be listed
git branch -a # Shows both local and remote branches
git branch -d <branch-name> # To delete branch
git switch <branch-name>    # To switch between branches
git switch -c <branch-name> # Shortcut to create and switch to the new branch
git checkout <branch-name>  # Combination of git switch - git restore
git merge -m "message" <branch-name>
git push # Push to Remote repository
git pull # To update your local branch
git clone # Clone repository into a new directory
```

To add files to be untracked, use a .gitignore file:
```shell
log.txt # To untrack one single file
*.txt   # To untrack all files for one particular extension
dir/    # To exclde all files from one directory
```

## GitHub

```shell
git remote [-v | --verbose] # To display the list of remote repository currently connected to. Use -v to show remote url after name
git remote add <name> <URL> # To connect to a remote repository, usually <name> is set to 'origin'
git remote [remove | rm] <name> # All remote-tracking branches and configuration settings for the remote named <name> are removed

git push -u origin master # To push changes to remote repository into master branch
```