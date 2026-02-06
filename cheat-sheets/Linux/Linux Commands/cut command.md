It is particularly useful for processing text files and can be used to extract specific columns or fields from structured data.
## Basic Syntax

```shell
cut [OPTION]... [FILE]...
```
## Common Options

**-f, --fields=LIST**: Specify which fields to extract. Fields are typically separated by a delimiter (default is tab).
Example: `cut -f1,3 file.txt` extracts the 1st and 3rd fields from each line of `file.txt`.

**-d, --delimiter=DELIM**: Specify a custom delimiter instead of the default tab.
Example: `cut -d',' -f1 file.csv` extracts the first field from a CSV file where fields are separated by commas.

**-c, --characters=LIST**: Extract specific character positions from each line.
Example: `cut -c1-5 file.txt` extracts the first five characters from each line of `file.txt`.

**-s, --only-delimited**: Suppress lines that do not contain the delimiter.
Example: `cut -d',' -f1 -s file.csv` will only output lines that contain a comma.

**--complement**: Instead of extracting the specified fields or characters, this option will output everything except the specified fields or characters.
Example: `cut -f1 --complement file.txt` will output all fields except the first one.
### Examples

**Extracting Fields from a CSV File**:

```bash
cut -d',' -f2,4 data.csv
```

This command extracts the 2nd and 4th fields from `data.csv`, assuming the fields are separated by commas.

**Extracting Specific Characters**:

```bash
cut -c1-10 file.txt`
```

This command extracts the first 10 characters from each line of `file.txt`.

**Using with Pipes**:

```bash
echo "name,age,city" | cut -d',' -f2
```

This command outputs `age`, which is the second field from the input string.