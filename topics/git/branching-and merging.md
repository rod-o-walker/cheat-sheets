---
layout: topic-page
topic: git
permalink: /git/branching-and-merging
title: Branching and Merging
summary: Creating branches and then merging back
---

## Background
Typically a developer should never do any work directly on the master branch of an application/project. Instead, they will create a branch off of the master branch, work in that branch and merge back in to the master branch only when the changes have been tested and verified.

This keeps the master branch clean and always in good working order.

## Create a Branch
```code
git checkout -b <new-branch>
```
Creates a branch on your local repo.
