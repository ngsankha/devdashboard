#!/bin/sh

python wakatime.py
cat base_script.js >> _script.js
git checkout gh-pages
mv _script.js script.js
git add script.js
git commit -m "Update dashboard at `date`"
