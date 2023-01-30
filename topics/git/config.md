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

## Update a config property
Run following command within git folder
``` shell
git config user.name "Mona Lisa"
```
If the config property is to be global, rather than project specific, use the --global option
``` shell
git config --global user.name "Mona Lisa"
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
