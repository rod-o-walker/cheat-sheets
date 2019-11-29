---
layout: topic-page
topic: git
permalink: /git/commands
title: Commands
summary: Random helpful git commands
---


## "Forgetting" stuff
If a file is added to .gitignore after it has already been committed, then will need to remove from the git index.
For a file:
```shell
git rm --cached <file>
```
For a folder:
```shell
git rm -r --cached <folder>
```

