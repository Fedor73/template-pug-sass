```
#!python

git submodule add -f lorem gulp/tasks/development
```



```
#!python

git reset HEAD .gitmodules
git reset HEAD gulp/tasks/development
```

git status
должен после этих команд остаться пустым!!!

```
#!python

npm i --allow-root
```


```
#!python

gulp dev
```