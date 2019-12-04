---
layout: topic-page
topic: git
permalink: /git/branching-and-merging
title: Branching and Merging
summary: How to create branches and merge back in
---

## Overview
Typically a developer should never do any work directly on the master branch of an application/project. Instead, they will create a branch off of the master branch, work in that branch and merge back in to the master branch only when the changes have been tested and verified.

## Switch to a branch
```shell
git checkout <branch-name>
```
This is assuming the specified branch already exists

## Create a branch
```shell
git branch <branch-name>
```
This creates branch on local repo, but doesn't actually switch over to the branch

```shell
git checkout <branch-name>
```
This will actually switch into the branch. 

Or can use the shorthand command ...
```shell
git checkout -b <branch-name>
```
which does both the create and switch over in one command.

## Delete a branch
Delete local branch:
```
git branch --delete branch_name
```
Delete remote branch:
```
git push <remote_name> --delete <branch_name>
```

## Merging
After completing, testing and commiting changes to working branch, these changes will likely need to be merged in to the main (e.g. master  branch). To do so, will switch into the destination branch:
```shell
git checkout master
```
And then merge the desired branch into the current branch:
```shell
git merge <branch-name>
```

## Merge types
In the simplest case, the working branch will be directly ahead of the master branch, in terms of commits, and so the merge will be a _fast forward_ merge, meaning the HEAD pointer of the master branch will be updated to point the HEAD pointer of the working branch. No actual file merging is actually required.
