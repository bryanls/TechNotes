The name 'chmod' stands for "change mode". It is used to change the file system permissions of files and directories.

## Basic Syntax
```bash
chmod [options] mode file
```
- `mode`: Specifies the permissions to set.
- `file`: The name of the file or directory whose permissions you want to change.
## Modes
There are two primary ways to specify the mode:
### Symbolic Mode
In symbolic mode, you can use letters to specify the permissions:

- `u`: User (owner)
- `g`: Group
- `o`: Others
- `a`: All (user, group, and others)

You can add (`+`), remove (`-`), or set (`=`) permissions. For example:

- `chmod u+x file.txt`: Adds execute permission for the owner.
- `chmod g-w file.txt`: Removes write permission for the group.
- `chmod o=r file.txt`: Sets read permission for others, removing any other permissions.

### Numeric Mode

In numeric mode, permissions are represented by three digits, where each digit is a sum of the permissions:

- Read = 4
- Write = 2
- Execute = 1

For example:

- `chmod 755 file.txt`: Sets permissions to `rwxr-xr-x` (owner can read, write, and execute; group and others can read and execute).
- `chmod 644 file.txt`: Sets permissions to `rw-r--r--` (owner can read and write; group and others can only read).

## Examples

1. **Make a script executable**:
    
    bash
    
    RunCopy code
    
    `1chmod +x script.sh`
    
2. **Set permissions to read and write for the owner, and read for group and others**:
    
    bash
    
    RunCopy code
    
    `1chmod 644 file.txt`
    
3. **Remove execute permission for others**:
    
    bash
    
    RunCopy code
    
    `1chmod o-x file.txt`
    

## Options

Some common options for `chmod` include:

- `-R`: Apply changes recursively to all files and directories within a specified directory.
- `--verbose`: Show a message for each file processed.