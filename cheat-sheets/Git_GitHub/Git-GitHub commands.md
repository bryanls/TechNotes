## Git

```shell
git --version
git config --global http://user.name 'myname'
git config --global http://user.email 'my@email'
git init # Initialize Local Git repository
git add <file>      # Add File(s) to Index (To start tracking the file changes)
git status # Check status of working tree
git commit -m "message" # Commit changes in index
git rm --cached <file>  # To unstage a file
git branch # To see the current branches
git branch <branch-name>    # To create new branch
git branch -r # Remote-tracking branches to be listed
git branch -a # Shows both local and remote branches
git branch -d <branch-name> # To delete branch
git switch <branch-name>    # To switch between branches
git switch -c <branch-name> # Shortcut to create and switch to the new branch
git merge -m "message" <branch-name>
git push # Push to Remote repository
git pull # To update your local branch
git clone # Clone repository into a new directory
git restore <file>  # To discard changes in working directory
git checkout <branch-name>  # Combination of git switch - git restore
git commit --amend -m "Updated commit message" # The previous commit will be replaced with a new commit that includes the updated changes. Be careful!
```

To add files to be untracked, use a .gitignore file:

```shell
log.txt # To untrack one single file
*.txt       # To untrack all files for one particular extension
dir/ # To exclde all files from one directory
```

## GitHub

```shell
git remote # To display the list of remote repository currently connected to
git remote add origin <url-remote-repostory>    # To connect to a remote repository
git push -i origin master # To push changes to remote repository into master branch
```