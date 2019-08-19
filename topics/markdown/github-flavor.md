---
layout: topic-page
topic: markdown
permalink: /markdown/github-flavor
title: GitHub Flavor
summary: GitHub has its own flavor of Markdown (GFM), which provides some additional functionality
---


## Code blocks
Use the code block fence, which starts and ends with \`\`\` (3 back tick characters), to visually present a block of code.
````
```
code goes here
```
````
<br/>
Can also specify the languange (e.g. javascript) after the opening \`\`\` to have the markdown renderer apply some syntax highlighting.
<br/>
Complete list of supported languages is here: 
<https://github.com/github/linguist/blob/master/lib/linguist/languages.yml>


## Links
GFM requires you to put \< and \> around URLs to embed them, instead of just putting the URL as is directly in the markdown text:
```
<http://www.google.com>
```
<br/>
The other format of [text](url) still works as normal.
