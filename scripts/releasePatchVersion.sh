#!/bin/bash

cd ..
oldAppVersion=v`jq .version package.json | tr -d '"' `
newAppVersion=`npm --no-git-tag-version version patch`
ng build --baseHref="https://lukaszres.github.io/ng-web/"
git add .
git commit -m "$newAppVersion"
git tag $newAppVersion

args=$oldAppVersion..$newAppVersion
echo "-------------RELEASE NOTES-------------"
git log --pretty=format:"  - %s" $args
# git log --pretty=format:"  - %s" v1.0.0..v1.1.0
