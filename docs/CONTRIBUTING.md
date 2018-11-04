[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  
# Contributing

I want to encourage everyone to get involved
with the development of this application. 
The project is developed by one person so I admit that 
I may miss things, or occasionally get them wrong.
I've put together some guidelines that should help you
get started with making contributions.

Thanks for helping improve this application for everyone!

## Questions, concerns, or issues

If you've got a question or problem that you think others may
have, then please read this first.

The GitHub issue tracker is preferred channel for dealing
with these questions. It keeps questions public and allows
others to pitch in with potential solutions,
it also means everything is documented for the future.
This should not be used for personal questions or issues
unfit for public discussion, in those instances I encourage
you to contact the owner of this repo directly.

Before submitting a new issue, use the GitHub search
(or just browse through [open issues](https://github.com/pinkmadkitten/cat-app/issues) or
[closed issues](https://github.com/pinkmadkitten/cat-app/issues?q=is%3Aissue+is%3Aclosed))
to see if it has already been submitted before.
If it hasn't, then go ahead and create a new one.
When creating a new issue, please spend some time
creating an identifiable and specific
title, then provide as much detail as possible in the main
description.

Examples of bad titles:
* _Problem with backend_
* _Question about the app_
* _Just a thought..._
* _Can't complete instalation_

Examples of good titles:
* _Backend: update restify package_
* _Main page: improve accessibility_
* _Refactor `getRandomCat` method implementation_

## Amendments, corrections, and contributions

Contributions are so gratefully received. If you've noticed
an error, or would like to add additional resources then
please use a pull request. To ensure your pull request
is accepted as quickly as possible, please take a moment
to check the following guidelines. Once a pull request
has been submitted, it can be reviewed by repo owner. 
When repo owner thinks it looks good, it'll be accepted 
and merged in.

### General guidelines

* Ensure any added packages are really needed. Don't add jQuery 
if you need it for 1 row only - try to find how to implement it
using vanilla JS / ES6;
* If you're adding a feature then, please, do the following:
  - use either of existing pages or components as a template
  - give a suggested file some meaningful name
  - place the file under `extensions/`
  - also list the improvement in [`README.md`](README.md).
    Please, feel free adding any comments.
* In your PR comment give a comprehensive description of
  what and why you're suggesting to add, or refer to an issue
  (e.g. `Resolves #121`).

### Commits

Please ensure your PR initially has 1 or 2 commits,
3 as a maximum. Otherwise please squash your commits
into fewer well separated commits.
It's important that commits are atomic to keep the history clean.
Below you will find a short guide on squashing commits into a clean history. 
Please read through and follow [Chris Beams's - How to write a git commit message](http://chris.beams.io/posts/git-commit/).

1. Run `git log --oneline master..your-branch-name | wc -l`
   to see how many commits there are on your branch.
1. Run `git rebase -i HEAD~#` where # is the number
   of commits you have done on your branch.
1. Use the interactive rebase to edit your history.
   Unless you have good reason to keep more than one
   commit, it is best to mark the first commit
   with 'r' (reword) and the others with 's' (squash).
   This lets you keep the first commit only, but change
   the message.

If your commit resolves some issue then please refer the issue.
This will get issue closed automatically upon merge.
Commit message example:

```
fix broken axios import in js/main.js

Resolves #111
```

Note a blank line before `Resolves...`. Everything after a
blank line will be considered supplementary information
not normally required to show up when anyone browses
commits history with compact output.

### Never made any Pull Requests before?


Consider completing
[Kent C. Dodds' How to Contribute to an Open Source Project on GitHub course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
(14 lessons, each ~3 mins long)

## Credits

- [BlueHatbRit/EDU-CONTRIBUTING.md](https://gist.github.com/BlueHatbRit/3bd366313f7ca2c7d2537d927ec970e8)
- [PurpleBooth/Good-CONTRIBUTING.md-template.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426)
