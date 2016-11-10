#!/bin/bash
#######git自动提交脚本#########################
#
#1.将此文件置于开发目录下(确保当前分支为开发分支)
#2.忽略本文件(.gitignore增加本文件路径)
#3.执行....就可以愉快的提交了
#
############################################

git_status=`git status --p`

if [[ $git_status = "" ]] ;then
    echo "没有需要提交的修改"
    exit
fi

dev_branch=`git branch | sed -n '/\* /s///p'`

`git add ./`

git commit -m "脚本自动提交修改"

git_version=`git log -1 --pretty=format:"%H"`

`git checkout dev`

`git pull`

git cherry-pick "$git_version"

`git push`

git checkout "$dev_branch"

echo "已经成功提交到测试服"