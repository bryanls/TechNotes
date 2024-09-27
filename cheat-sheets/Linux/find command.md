The `find` command is a powerful command-line utility in Unix/Linux operating systems that enables users to search and locate files or directories based on various criteria. It is a versatile tool that can be used to find files based on different attributes, such as name, size, type, permissions, ownership, and modification time.

Usage: ```
```
find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]
```

Where:
The -H, -L and -P options control the treatment of symbolic links.
Path is the directory or `.` (current directory)

`-name` The name of the file/direcotry, it can be without quotes
`-type f` for files, `d` for directories

Here are some examples:
```shell
find /home/jay -name *.txt # This will find and show every/all files that has .txt extension in the directory indicated, it will also show hidden files that match the criteria
find /home/jay -name *.txt | grep -v .cache # This will do the same as above but exclude the cache files (hidden)
find . -name Documents # In this case we have a directory named Documents and a file with same name Documents, so this will show:
# ./Documents
# ./Documents/Documents
find . -name Documents -type f # This will only return only the file named Documents:
# ./Documents/documents

find . -type f -name Documents -exec rm {} + # This will remove the Documents file
# -exec means that we want to execute a command for every item in the results
# {} is a placeholder for every item in the results
# + or \; is a terminator (the end) for the command, when using \ is necessary to use ; to scape it out
```

1. Find all files accessed 50 days back:
```bash
find / -atime 50
```
2. Find all files modified more than 50 days back and less than 100 days:
```bash
find / -mtime +50 –mtime -100
```
3. Find all files changed in the last 1 hour:
```bash
find / -cmin -60
```
4. Find all files modified in the last 1 hour:
```bash
find / -mmin -60
```
5. Find all files accessed in the last 1 hour:
```bash
find / -amin -60
```
6. Find all 50MB files:
```bash
find / -size 50M
```
7. Find all files greater than 50MB and less than 100MB:
```bash
find / -size +50M -size -100M
```
8. Find all 100MB files and delete them:
```bash
find / -type f -name "*.mp3" -size +10M -exec rm -f {} \;
```
9. Find all .mp3 files greater than 10MB and delete them:
```bash
find / -type f -name "*.mp3" -size +10M -exec rm -f {} \;
```
10. Find all directories of user Tecmint under /home directory:
```bash
find /home -user tecmint -type d
```
11. Find all files with permissions 777:
```bash
find / -type f -perm 777
```
12. Find all files with permissions 777 and change them to 644:
```bash
find / -type f -perm 777 -exec chmod 644 {} \;
```

These are just a few examples of the many different options and capabilities of the `find` command. By combining different options and criteria, users can create complex searches and automate various administrative tasks.