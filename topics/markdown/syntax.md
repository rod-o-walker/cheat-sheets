---
layout: topic-page
topic: markdown
permalink: /markdown/syntax
title: Syntax
summary: Syntax for creating markdown content
---

## Headers
```
# This is an <h1> header
## This is an <2> header
####### This is an <h6> header
```
**Note:** The space between the hashes and the text is required.

## Emphasis
```
*This text will be italic*
_This text will be italic_
```
```
**This text will be bold**
__This text will be bold__
```

## Lists
Unordered list:
```
* Item 1
* Item 2
  * Sub-item
```
<br/> 
Ordered list:
```
1. Item 1
1. Item 2
  * Sub-item
```

## Links
Embed the link text as is:
```
http://example.com
```
<br/> 
Replace the link text with something else:
```
[Some text](http://example.com)
```

## Blockquotes
```
> This text will be styled as a blockquote
```

## Images
```
![Alt Text](url)
```

## Line break
No specific syntax for this, just use the HTML line-break tag:
```
Some text
<br/>
Some more text, following a blank line
```

## Escaping special characters
Markdown allows you to use backslash escapes to output literal characters that wouuld otherwise have special meaning
```
\*will show the asterisk characters\*
```

## Code blocks
Use the code block fence, which starts and ends with \`\`\` (3 back tick characters), to visually present a block of code.
```
`````````
code goes here
`````````
```
Can also specify the languange (e.g. javascript) after the opening \`\`\` to have the markdown renderer apply some syntax highlighting.
<br/>
Complete list of supported languages is here: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
