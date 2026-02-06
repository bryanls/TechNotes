The awk command Is a powerful method for processing or analyzing text or data files, which are organized by lines (rows or records) and columns (fields).

We can use awk as a linux command and also as a script language like bash shell scripting.

Its basic syntax is:
```shell
awk options 'selection_criteria {action}' input-file

# cat input_file | awk [options] '[selection_criteria] {action}'
```

Where:
'selection_criteria' is a condition/pattern that decides which lines will be selected to perform the action.
'action' is the command that will be executed on the selected lines. It is a logic to perform action on each row/record.

The most common options used in awk are:

- `-f file`: to specify the file that contains the awk script
- `-v var=value`: to assign a value to a variable before executing the script
- `-F fs`: to specify the field separator (default separator is tab and space)

By default, awk breaks a line into fields separated by whitespace. The fields are stored in the variables `$1`, `$2`, `$3`, and so on, and `$0` represents the entire line. The NR and NF built-in variables represent the total number of records and the number of fields in a record, respectively.

Here are some examples of using awk:

1. Print all lines in the input file:
```shell
awk '{print}' employee.txt
```
Output:
```
ajay manager account 45000
sunil clerk account 25000
varun manager sales 50000
amit manager account 47000
tarun peon sales 15000
deepak clerk sales 23000
sunil peon sales 13000
satvik director purchase 80000
```

Using `awk '{print $0} demo.txt'` is same as `awk '{print }' demo.txt` because by default variable is $0

We can print multiple variables by using `$1,$3` or reverse `$3,$1`

2. Print lines that contain the word "manager":
```shell
awk '/manager/ {print}' employee.txt
```
Output:
```
ajay manager account 45000
varun manager sales 50000
amit manager account 47000
```

3. Print the first and last fields in the input file:
```shell
awk '{print $1, $NF}' employee.txt
```
Output:
```
ajay 45000
sunil 25000
varun 50000
amit 47000
tarun 15000
deepak 23000
sunil 13000
satvik 80000
```

4. Print the line number of lines that contain the word "manager":
```shell
awk '/manager/ {print NR}' employee.txt
```
Output:
```
1
3
4
```

5. Print the number of fields in each line:
```shell
awk '{print NF}' employee.txt
```
Output:
```
4
4
4
4
4
4
4
5
```

6. Print the line number of the last line in the input file:
```shell
awk 'END {print NR}' employee.txt
```
Output:
```
8
```

7. Print the first line in the input file:
```shell
awk 'NR==1 {print}' employee.txt
```
Output:
```
ajay manager account 45000
```

8. Print the last line in the input file:
```shell
awk 'END {print}' employee.txt
```
Output:
```
satvik director purchase 80000
```

9. Sum the values in the last field of the input file:
```shell
awk '{sum += $NF} END {print sum}' employee.txt
```
Output:
```
275000
```

10. Print the line number and the line itself of the first line that contains the word "director":
```shell
awk '/director/ {print NR, $0}' employee.txt
```
Output:
```
8 satvik director purchase 80000
```

These are just a few examples of what can be done with awk. It is a very powerful and versatile tool for text processing.

More examples:
```bash
awk '{print NR,$0,NF}' demo.txt # this will print entire file with numbers (NR) and NF will print how many fields are there at the end of every line
# output:
# 1 col1 col2 col3 3
# 2 col1   col2   col3 col4 4
```

```bash
awk '{print NR,$NF}' demo.txt # $NF will take last field and replace the number of fields with content
#output:
# 1 col3
# 2 col4
```

```bash
awk '{print $NR}' demo.txt # $NR will print first, second, thrid and so on, since NR is auto increment
#output:
# col1
# col2
```

NR - Counts the number of input records (usually lines). The awk command performs the pattern/action statements once for each record in a file.

NF - Counts the number fields in the current input record and displays the last field of the file.

FS - Contains the character used to divide fields on the input line. The default separator is space, but you can use FS to reassign the separator to another character (typically in BEGIN).

RS - Stores the current record separator character. The deafult input lien is the input record, which makes a newline the default record seaparator. The command is useful if the input is a comma-separated file (CSV).

OFS - Stores the output field separator, which separates the fields when printed. The default separator is a blank space. Whenever the print file has several parameters separated with commas, the OFS value is printed between each parameter.