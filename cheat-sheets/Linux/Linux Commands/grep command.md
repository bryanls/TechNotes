
### Basic Syntax


### Common Options


### Examples



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
