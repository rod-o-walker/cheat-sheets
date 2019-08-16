---
layout: topic-page
topic: git
permalink: /git/branching-and-merging
title: Branching and Merging
summary: How to create branches and merge back in
---

## Overview
Typically a developer should never do any work directly on the master branch of an application/project. Instead, they will create a branch off of the master branch, work in that branch and merge back in to the master branch only when the changes have been tested and verified.

## Create a branch
``` code
git branch <branch-name>
```
This creates branch on local repo, but doesn't actually switch over to the branch

``` code
git checkout <branch-name>
```
This will actually switch into the branch. 

Or can use the shorthand command ...
``` code
git checkout -b <branch-name>
```
which does both the create and switch over in one command.
