---
Creation Date: 2024-08-29T01:40:00
---
**Check which shells are installed on your system**
```shell
cat /etc/shells
```

**Check which disks exists in our hard drive**
```shell
cd /mnt/

# Use the following path to go to local shell scripts:
/mnt/d/shell-scripts/
```

**Shebang line is nothing but which shell you are using to run the script**
```shell
#!/bin/bash
```

**Provide the Execution Permission using chmod +x script_name.sh**

*Note:* Running shell script without execution permission: `bash script_name.sh`

# Stdin Stdout Stderr
` >file_name.txt`   defaults to success output
`1>file_name.txt`   success output
`2>file_name.txt`   error output

`1>file_name.txt 2>file_name.txt`   both will store into a single file
`1>file_name.txt 2>&1`
`&>file_name.txt`

## Variables
```bash
x=4
x="hello world"

# To display the variable content
echo $x # output will be 4
echo "$x" # output will be 4
echo '$x' # output will be $x , double quotations will threat the value as a string
# Default value of a variale is Empty/Nothing
```

**System defined variables**
```shell
# we can see them by using set command
echo $USER # automation
echo $BASH # /bin/bash
```

**User defined variables**

```markdown
Variable name should:
- Contain only a-z or A-Z, 0-9 and _ characters
- Length be less than or equal to 20 characters
Variable name are case sensitive.
Don't provide space on either sides of equal symbol
No need to declare variable type, automatically it will take care while executing commands or scripts
Use quotes for the data if data consist of spaces
```

**Assigning output/values to variables**

We can store output of command into a variable as follows: 
```bash
anyVariable=$(command)
anyVariable=`command`
```
If the command output contains spaces, it's recommended to use the `$(command)` syntax as it handles word splitting and globbing better than backticks.

We can assign one variable value/data into another using:
```bash
Name="Shell scripting"
NewName=$Name
NewName=${Name}
```

### Variable Expansion
In shell scripting, variable expansion with a question mark (`${variable?error message}`) is used to perform a check on the value of a variable. If the variable is null or unset, it will print an error message and exit the script with a non-zero status.

Here's an example:
```shell
#!/bin/bash

my_variable=hello

# This will print the value of the variable
echo ${my_variable}

# This will print "message: must not be null" and exit the script with a status of 1
# if the variable is null or unset
echo ${my_variable?message: must not be null}

# This will not print an error message, because the variable is not followed by a question mark
echo ${my_variable}
```
In the example above, the script prints the value of the `message` variable and then performs a check on the variable using the variable expansion with a question mark (`${message?message: must not be null}`). If the `message` variable is null or unset, it will print an error message and exit the script with a non-zero status.

This can be useful in situations where you want to ensure that a variable has a value before using it in a command or script, as it helps to catch errors and make your code more robust.

## Conditional statements
### IF statement best practice
```bash
if [ $a == $b ]; then
  echo "a == b"
fi
```

You can use a semicolon, or you can write `then` on a separate line. Either one is allowed.

```bash
if [ $a == $b ]
then
  echo "a == b"
fi
```

Having neither a `;` nor a newline is a syntax error.

```bash
$ if [ $a == $b ] then
>   echo "a == b"
> fi
bash: syntax error near unexpected token `fi'
```

As for `[` vs `[[`, see: 

**What's the difference between `[` vs `[[` in bash?**
`[[` is bash's improvement to the `[` command. It has several enhancements that make it a better choice if you write scripts that target bash. My favorites are:

1. It is a syntactical feature of the shell, so it has some special behavior that `[` doesn't have. You no longer have to quote variables like mad because `[[` handles empty strings and strings with whitespace more intuitively. For example, with `[` you have to write
    
    ```bash
    if [ -f "$file" ]
    ```
    
    to correctly handle empty strings or file names with spaces in them. With `[[` the quotes are unnecessary:
    
    ```bash
    if [[ -f $file ]]
    ```
    
2. Because it is a syntactical feature, it lets you use `&&` and `||` operators for boolean tests and `<` and `>` for string comparisons. `[` cannot do this because it is a regular command and `&&`, `||`, `<`, and `>` are not passed to regular commands as command-line arguments.
    
3. It has a wonderful `=~` operator for doing regular expression matches. With `[` you might write
    
    ```bash
    if [ "$answer" = y -o "$answer" = yes ]
    ```
    
    With `[[` you can write this as
    
    ```bash
    if [[ $answer =~ ^y(es)?$ ]]
    ```
    
    It even lets you access the captured groups which it stores in `BASH_REMATCH`. For instance, `${BASH_REMATCH[1]}` would be "es" if you typed a full "yes" above.
    
4. You get pattern matching aka globbing for free. Maybe you're less strict about how to type yes. Maybe you're okay if the user types y-anything. Got you covered:
    
    ```bash
    if [[ $ANSWER = y* ]]
    ```
    

Keep in mind that it is a bash extension, so if you are writing sh-compatible scripts then you need to stick with `[`. Make sure you have the `#!/bin/bash` shebang line for your script if you use double brackets.

**See also**
- [Bash FAQ - "What is the difference between test, [ and [[ ?"](http://mywiki.wooledge.org/BashFAQ/031)
- [Bash Practices - Bash Tests](http://mywiki.wooledge.org/BashGuide/Practices#Bash_Tests)
- [Server Fault - What is the difference between double and single brackets in bash?](https://serverfault.com/questions/52034/what-is-the-difference-between-double-and-single-square-brackets-in-bash)

### Process sustitution
Process substitution allows you to use the output of a command as a file. The `<(command)` syntax creates a FIFO (first-in, first-out) special file that pipes the command's output into the in use command.

Example:
```bash
#!/bin/bash

# Sample list 1
list1=(file1 file2 file3 file4)

# Sample list 2
list2=(file2 file1 file4 file3)

# Sort both lists
sorted_list1=($(printf '%s\n' "${list1[@]}"|sort -f))
sorted_list2=($(printf '%s\n' "${list2[@]}"|sort -f))

# Compare the sorted lists using diff
if diff -y <(printf '%s\n' "${sorted_list1[@]}") <(printf '%s\n' "${sorted_list2[@]}") >/dev/null 2>&1; then
  echo "Both lists are identical."
else
  echo "There are differences between the two lists."
fi

# `>/dev/null 2>&1`: This redirection discards the output of the `diff` command. By redirecting both standard output (`> /dev/null`) and standard error (`2>&1`) to the null device, we ensure that the script doesn't produce any output for the `diff` command, and we only check if the exit code of the `diff` command is zero (indicating no differences) or non-zero (indicating there are differences).

# The `if` statement then checks if the `diff` command has an exit code of zero (success) or not (failure). If the exit code is zero, the `if` condition evaluates to true, and the script prints "Both lists are identical." If the exit code is non-zero, the `if` condition evaluates to false, and the script prints "There are differences between the two lists."
```

### Evaluate the exit code of a command
In shell scripting, you can evaluate the exit code of a command using the `$?` variable. The `$?` variable contains the exit status of the most recently executed foreground pipeline. A pipeline is a sequence of commands separated by one of the control operators `|` or `||`.

Here's an example of how to evaluate the exit code of a command:
```bash
#!/bin/bash

# Run a command that you want to evaluate
command_to_evaluate

# Check the exit code of the command
if [ $? -eq 0 ]; then
    echo "The command succeeded"
else
    echo "The command failed"
fi
```
In the example above, the `command_to_evaluate` should be replaced by the command you want to evaluate. The `if` statement checks the exit code of the command using the `-eq` operator to check if the exit code is equal to 0 (which means the command succeeded). If the exit code is not equal to 0, then the `else` statement will be executed, indicating that the command failed.

Note that the exit code of a command is an integer between 0 and 255, where 0 usually indicates success and any other value indicates failure. Different commands may have different conventions for what exit codes they return, so it's a good idea to check the documentation for each command to understand its exit code conventions.











