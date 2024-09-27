```shell
clear # clear the terminal screen
man # system's manual pager
whatis # display on-line manual page description
whoami # print effective userid
pwd # print name of current/working directory
touch # change file stamps
```

### ls
```shell
ls # list directory contents

-h #with -l and/or -s, print human readable sizes (e.g., 1K 234M 2G)
-l #use a long listing format
-r #reverse order while sorting
-s #print the allocated size of each file, in blocks
-S #sort by file size, largest first
-t #sort by modification time, newest first
```

### cd
```shell
cd # change directory
cd - #return to previous directory
```

### cp
```shell
cp # copy files and directories
#ex. cp /source_directory/file.txt /destination_directory/
```

### mv
```shell
mv # move (rename) files
#ex. move file: mv /source_directory/file.txt /destination_directory/
#ex. rename file: mv /same_directory/file.txt /same_directory/newname_file.txt
#ex. rename directory: mv /directory/ /newname_directory/
```

### rm
```shell
rm # remove files or directories
-f, --force #ignore nonexistent files and arguments, never prompt
-i #prompt before every removal
-r, -R, --recursive #remove directories and their contents recursively
-d, --dir #remove empty directories
```

### mkdir
```shell
mkdir # make directories
```
## Read a file content...

**by opening it**
`vi / vim / nano`  editors

**without opening it**
```
cat
less
more
```

**with conditions**
```shell
more # file perusal filter for crt viewing

-n 2 #Displays the number of lines indicated (two lines in this example)
+n 4 #Displays the content from the line number indicated (show content after the four line)
```

```shell
tail # Reads the last 10 lines of content from a file
```

### grep command
```shell
grep [option] "string/pattern" file/files

# Basic options: 
-i #To ignore case for matching/searching
-w #To match a whole word
-v #To display the lines which are not having given string or text
-o #To print/display only matched parts from matched lines
-n #To display the matched line numbers
-c #To display matched number of lines
-A #To display N lines After match
-B #To display N lines Before match
-C #To display N lines around match
-r #To search under current directory and its sub-directory (recursively)
-l #To display only file names

# Advanced options:
-f #Takes search string/pattern from a file, one per line
-e #To search multiple strings/patterns
-E #Interpret PATTERN as an extended regular expression (ERE)
```

### head

```shell
head # Reads the top 10 lines of content from a file
```

date

find

### cut command
```bash
cut # use to extract part of each line from a file
-d #to separate by delimiter character
-c #to serparate by character
-f #to separate by field (default delimiter is Tab, which are considered as columns)
```
It is based on:
- Byte Position
- Character Position
- Fields based on delimiter (by default delimiter is the Tab)
```bash
cut command syntax:
cut [options] <positions(fields) / range of positions(fields)> <input_file>
cat <input_file> | cut [options] <positions(fields) / range of positions(fields)>
```
Ranges:
`2`    only second byte/character/field
`2-`   second byte/character/field to last
`-7`   first to seven
`3,5`  third and fifth
```bash
# Exs: root:x:0:0
cut -d ':' -f 1 /etc/passwd
# root
cut -d ':' -f 1,4 /etc/passwd # -f 1,4 means to cut only 1 and 4 fields, to use range of fields use 1-4
# root:0
cut -d ':' -f 1,4 /etc/passwd --output-delimiter=" " # this will replace : with space
# root 0
```

*Note:* Use `s` option with `-f` to ignore the line that do not contain a delimiter

```bash
# grep - cut - awk example
httpd -v
#Server version: Apache/2.4.41 ()

httpd -v | grep -E "version" | cut -d '/' -f 2 | cut -d ' ' -f 1
#2.4.41

httpd -v | awk -F '[ /]' '/version/ {print $4}'
#2.4.41
```

history

sort

df

seq

wc

bc

tar

zip

unzip

wget

curl

file

du

stat

ln

last

paste

netstat















