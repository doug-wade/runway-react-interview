# react-interview

Welcome to the Runway frontend exercise! We really appreciate you taking time to show us your
frontend development skills.

This repository is configured with a bunch of widely-used tools that are part of our
frontend engineering stack at Runway: React, NextJS, TypeScript, and more. It also includes
[Chakra UI](https://chakra-ui.com/docs/getting-started), a flexible component library that contains
handy building blocks for creating React apps.

Along with the tooling, you'll find a few components to help get you up and running on the
exercise. Our goal with the repo is to save you time creating a modern development
environment and writing boilerplate code. You're welcome to use some,
all, or none of what's included here. If you prefer to start with something like
[create-react-app](https://github.com/facebook/create-react-app) and to
borrow selectively from this repo, please feel free to do so.

## Installation

You can install dependencies using `yarn install` and run the app using `yarn dev`.

## Additional Time

Hi evaluator! The [prompt](https://runwayhq.notion.site/Spreadsheet-Exercise-React-32f84adc844d4ed48f47d61052c038bf) says to leave some notes on what I would implement if I had more time. Here's a list of some thoughts I have, in the rough order that I would work on them.

- Add borders to the Label component -- I don't like that the labels are just hanging out there in space like that.
- Test the spreadsheet with a voice-over solution to test accessibility -- I ran lighthouse, but didn't have time to do much a11y work, so there are some low-hanging fruit (add a `lang` attribute, for instance)
- Fix the static analysis -- I was in a hurry and broke the linting and typing, according to VS Code
- Write some tests! -- there aren't any unit/integration/e2e tests or anything, and that would make maintainenance tough
- Investigate the performance -- this is a very simple application to be scoring 38 on lighthouse performance, and I'd spend some time looking into what's making it so slow
- Support other cell types

Also, my branch should be checked out in the tarball, but if it is not, my code is in a branch called `my-solution`.