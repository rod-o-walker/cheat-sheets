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

## Clone without (all) history
This will clone a repo but limit the amount of history that is included (makes for faster clone)
```shell
git clone --depth <n> <repo_url>
```

## Cherry-picking a commit
When you need to add a commit to a specific branch that exists in a separate branch without merging the whole branch.
This works for one or more commits, just by including each required commit hash.
```shell
git checkout <branch_to_be_updated>
git cherry-pick <commit_hash_1> <commit_hash_2> etc.
```
