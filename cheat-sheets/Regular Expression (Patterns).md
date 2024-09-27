**Character classes**

| Pattern | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| .       | Any single character, except linebreaks. Equivalent to `[^\n\r]`. |
| \w      | Any word character (a-z, A-Z, 0-9, \_)                            |
| \W      | Any non-word character                                            |
| \d      | Any digit (0-9)                                                   |
| \D      | Any non-digit                                                     |
| \s      | Any whitespace character                                          |
| \S      | Any non-whitespace character                                      |
| [abc]   | Any of a, b, or c                                                 |
| \[^abc] | Not a, b, or c                                                    |
| [a-g]   | Character between a & g                                           |

**Anchors**

| Pattern | Description |
| --- | --- |
| ^abc$ | start / end of the string |
| \b\B | word, not-word boundary |

**Escaped characters**

| Pattern | Description |
| --- | --- |
| \. \[ \] \{ \} \( \) \\ \^ \$ \| \? \* \+ | escaped special characters |
| \t\n\r | tab, linefeed, carriage return |

**Groups & Lookaround**

| Pattern | Description |
| --- | --- |
| (abc) | capture group |
| \1 | backreference to group #1 |
| (?:abc) | non-capturing group |
| (?=abc) | positive lookahead |
| (?!abc) | negative lookahead |

**Quantifiers & Alternation**

| Pattern   | Description               |     |
| --------- | ------------------------- | --- |
| *         | 0 or more                 |     |
| +         | 1 or more                 |     |
| ?         | 0 or 1                    |     |
| a{5}a{2,} | exactly five, two or more |     |
| a{1,3}    | between one & three       |     |
| a+?a{2,}? | match as few as possible  |     |
| ab\|cd    | match ab or cd            |     |

## Flags

In regular expressions, flags are optional parameters that modify the behavior of a regex. They are added at the end of the regex pattern, after the closing slash `/` in regex literals, or as a second argument in the `RegExp` constructor.

Here are some common flags:

- `i`: Case-insensitive matching. For example, `/hello/i` matches both "hello" and "HELLO".
- `g`: Global search. This flag enables the regex to search for multiple matches in a single string. For example, `/hello/g` matches all occurrences of "hello" in a string.
- `m`: Multiline search. This flag enables the `^` and `$` anchors to match the start and end of each line in a multiline string. For example, `/^hello/m` matches "hello" at the start of each line.
- `u`: Unicode matching. This flag enables the regex to match Unicode characters. For example, `/^\p{Lu}/u` matches any uppercase letter in Unicode.

Flags can be combined in a single regex pattern. For example, `/hello/ig` matches any occurrence of "hello" in a string, regardless of case and including multiple matches.

Here are some example regex patterns using flags:

- `/hello/i`: Matches "hello" in a case-insensitive manner.
- `/hello/g`: Matches all occurrences of "hello" in a string.
- `/hello/im`: Matches "hello" in a case-insensitive and multiline manner.
- `/^\p{Lu}/u`: Matches any uppercase letter in Unicode, including non-ASCII characters.
- `/[a-z]{2,5}/g`: Matches any lowercase letter in a range of 2 to 5 characters, including multiple matches.
- `/\d{4,8}/g`: Matches any digit in a range of 4 to 8 characters, including multiple matches.

Understanding these flags can help you create more powerful and flexible regex patterns in your code.