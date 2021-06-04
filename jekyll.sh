#!/bin/bash/env sh 

# only let the script proceed when started not by a pull request (PR)

if [ $TRAVIS_PULL_REQUEST == "true" ]; then # you can make this more strict via "==="
  echo "this is a PR, exiting now"
  exit 0
fi

# enable error reporting to the console & log that into a file entitled "log.txt" 

set -e

# build site with jekyll, by default to `_site' folder
cd pages
bundle exec htmlproof ./_site --disable-external --check-html --verbose
bundle exec jekyll build