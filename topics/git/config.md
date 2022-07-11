---
layout: topic-page
topic: git
permalink: /git/config
title: Config
summary: Configuration options when using Git
---

## See all current config
Run following command within git folder
``` shell
git config --list
```

## Storing credentials
Run following command within git folder
``` shell
git config credential.helper store
```

## Removing a config property
Run following command within git folder
``` shell
git config --global --unset <property.name goes here>
```
