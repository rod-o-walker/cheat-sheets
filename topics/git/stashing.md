---
layout: topic-page
topic: git
permalink: /git/stashing
title: Stashing
summary: Commands and notes related to stashing in Git
---

## Powershell note
"{" and "}" are special characters in powershell. So when specifying any shell id, be sure to wrap in single quotes.

``` shell
git stash drop 'stash@{1}'
```


## Basic stash
Creates a stash of all the uncommitted file changes in the current branch.
``` shell
git stash
```


## Save
This is like basic stash, except provides some additional options.

Add a message to the stash:
``` shell
git stash save "Your stash message"
```

Stash untracked files:
``` shell
git stash save -u
```


## Listing stashes

List saved stashes:
``` shell
git stash list
```

Stashes are stored as a stack. So if any command is given without specifying a stash id, then it will be applied to the top (most recent) stash.


## Applying stashes

``` shell
git stash apply
```

You can apply a specific stash by including stash id in the apply command:
``` shell
git stash apply stash@{1}
```

Applying a stash does not remove it from the stash stack. The stash pop command will apply and remove the stash.

``` shell
git stash pop
```

And similar to apply, you can specify a stash id if want to pop a specifc stash.


## View stash contents

``` shell
git stash show
```
Again, include a stash id to view a specific stash.

To delete a stash without applying it:


## Cleaning up stashes

``` shell
git stash drop <id>
```

Or can delete list of all stashes:
``` shell
git stash clear
```
