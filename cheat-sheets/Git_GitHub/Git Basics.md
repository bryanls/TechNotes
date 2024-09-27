Git is a powerful version control system that allows you to track changes made to your code and collaborate with other developers. With Git, you can save different versions of your project, create branches, and merge changes. In this guide, you'll learn the basics of Git and how to use it to manage your projects.

## Setting up Git
Before you start using Git, it's important to set up your Git username and email address. This information will be used to identify you as the author of each Git commit. Here's how to do it:
```
$ git config --global user.name "YOUR_USERNAME"
$ git config --global user.email "YOUR_EMAIL@example.com"
```

You can also check your Git configuration by running the following command:
```
$ git config --global --list
```

## Basic commands
To check the current Git version installed in the system:
```
git --version
git -v
```

To display Git's help:
```
git --help
git -h
```

To install lastest version of Git:
```
git update-git-for-windows
```
## Creating a Git Repository
To create a new Git repository, follow these steps:

Create a new directory for your project:
```
$ mkdir myproject
$ cd myproject
```

Initialize a new Git repository:
```
$ git init
```

This will create a new .git directory in your project directory. This directory contains all the necessary metadata for your Git repository.

To configure the initial branch name (deafult is 'master') to use in all of your new repositories, call:
```
git config --global init.defaultBranch <name>
```

The just-created branch can be renamed via this command:
```
git branch -m <name>
```

Create a README.md file with some information about your project:
```
$ touch README.md
```

Add the README.md file to the Git repository:
```
$ git add README.md
```

Commit the changes:
```
$ git commit -m "Initial commit"
```

## Committing Changes
To commit changes to your Git repository, follow these steps:

Make changes to your project files.

Add the changed files to the Git repository:
```
$ git add <file1> <file2> ...
```

or add all changed files:
```
$ git add .
```

Commit the changes:
```
$ git commit -m "Commit message"
```
## Viewing the Commit History
To view the commit history of your Git repository, use the following command:
```
$ git log
```

This will show you a list of all the commits made to your repository, along with the commit message and author information.

## Ignoring Files
Sometimes, you may want to ignore certain files or directories in your Git repository. To do this, create a .gitignore file in your project directory and add the names of the files or directories you want to ignore. For example:
```
# ignore all .log files
*.log

# ignore the build directory
build/
```

## Git Pull and Git Fetch
Git pull and Git fetch are two commands that allow you to update your local Git repository with changes made to a remote repository. Here's how they work:

git fetch: This command retrieves the changes made to a remote repository, but it does not merge them into your local repository. You can use this command to review the changes before merging them.
git pull: This command retrieves the changes made to a remote repository and immediately merges them into your local repository. This command is useful when you want to update your local repository with the latest changes.

## More commands

To check Git Status:
```
git status
git log
```

