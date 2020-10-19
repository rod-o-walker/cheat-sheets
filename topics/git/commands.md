---
layout: topic-page
topic: git
permalink: /git/commands
title: Commands
summary: Random helpful git commands
---


## "Forgetting" stuff
If a file is added to .gitignore after it has already been committed, then will need to remove from the git index.\
For a file:
```shell
git rm --cached <file>
```
For a folder:
```shell
git rm -r --cached <folder>
```

## Reset to a specific commit
This will update current local branch to a specific commit in its history
```shell
git reset --hard <commit hash>
```
If need to update the remote branch to this same old commit, will need to do a forced push
```shell
git push -f origin <branch name>
```
