Stands for stream editor, used for parsing and transforming text. It can be used for tasks like viewing file content, searching, find and replace, insertion and deletion.

Supports regex
Advantage over vi / vim editor: Edit files without opening it

The basic syntax for `sed` command is:
```bash
sed [options] 'command' file(s)
```

Here are a few commonly used `sed` commands:

- `p`: print matching lines
- `d`: delete matching lines
- `s`: substitute expressions
- `i`: insert text before a line
- `a`: append text after a line
- `c`: replace a line with text

To print (view) lines:
```bash
sed '' filename.txt # This will print the file content (reads the file content by default)
sed 'p' filename.txt # This will print the file content twice - p stands for print
sed -n 'p' filename.txt # This will print the file content once
sed -n '3p' filename.txt # This will print the 3rd line
sed -n '$p' filename.txt # This will print the last line
sed -n '3,10p' filename.txt # This will print from 3rd to 10th lines
sed -n '10,5+p' filename.txt # This will print from 10th line plus 5 more lines
sed -n '1~3p' filename.txt # This will print in range of 3 lines (1,4,7,10,13)
```

To delete lines:
```bash
# use d to delete lines
sed '4,$d' file.txt # This will delete lines from 4th to the last
sed '10,45d' file.txt
sed '10,+12d' file.txt # This will delete/remove lines from 10 to 12 plus
```

For example, to replace all occurrences of "hello" with "hi" in a file, you can use the following command:

```bash
sed 's/hello/hi/g' file.txt
```

Here, `s` is the substitute command, `hello` is the pattern to be replaced, `hi` is the replacement string, and `g` is the global flag that tells `sed` to replace all occurrences of the pattern on each line.

Note that `sed` does not modify the original file by default. To save the changes, you can use the `-i` flag:

```bash
sed -i 's/hello/hi/g' file.txt

sed -i # Use parameter -i to change the file content
sed -i.backup # Add whatever the name you want to the -i option to create a backup of the original file
```

This command will replace all occurrences of "hello" with "hi" in the file `file.txt`.
