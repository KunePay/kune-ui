![Kune UI Logo Wide](assets/logo-kune-ui-wide.png)

# Kune UI

*(For detailed information regarding this project and documentation visit [https://kune-ui.org](https://kune-ui.org))*

## What is it?

Kune UI is a highly opinionated themeable UI framework made for React.js

## Why should I use it?

As opposed to most other large-scale UI frameworks such as Material UI or React-Bootstrap, Kune UI was conceived and developed as a React-first UI framework.

Simply put, we made it from scratch thinking about using it with nothing other than React.js. No copying or implementing holistic concepts, or worse, porting code.

Moreover, features such as theming were thought of and implemented early in the development process of Kune UI, and not as an after-thought.

This means, in comparison to other contemporary React UI Frameworks, Kune UI is very stable, easy to implement, and makes React apps that use it better maintainable in the long-run.

## This repo

This repository contains:

- A boilerplate or starter app for creating web apps which includes a robust initial implementation of Next.js, React.js, and Kune UI
- A feature-full **themeable UI framework** meant to be used in the development of **React.js** applications

## Docs

The docs for Kune UI can be found at:

[https://kune-ui.org/docs](https://kune-ui.org/docs)

## Getting started

A complete guide for getting started can be found at:

[https://kune-ui.org/getting-started](https://kune-ui.org/getting-started)

There are two ways of getting started: downloading this repo to use as a base app **or** adding `kune-ui` as a dependency of your existing React project.

### Using Kune UI as a base app

Aside from containing the code-base for Kune UI, this repository is also a carefully thought-out base application which can be used as a starting point for any of your web app projects.

To get started using Kune UI as a base app, follow the instructions under the [Development](#development) section of this README, and then on your terminal:

- Navigate to the root of this repo
- Delete the `lib` directory
- Run the command `yarn add kune-ui` 

### Using Kune UI as a dependency

Even though this repository can be used as a starting base app, we are conscious that Kune UI could and should be able to be used in pre-existing apps.

With this in mind, we will release Kune UI as a periodically updated npm package with as little bloat as possible.

To use Kune UI in your app, simply run the following command where your package.json is located at:

```
npm install --save kune-ui
```

## Development

To begin development simply clone this repository, navigate to the directory's root, and run the following commands in your terminal:

```
$ npm install -g yarn
$ yarn install
$ yarn dev
```

Now you should be able to access the site from [http://localhost:3030](http://localhost:3030)

## Deployment

There's a script named `deploy.sh` at the root of this repository.

In our case we simply use this script to generate a static site for Kune UI which is then served as a [Github Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) page.

You can replace the contents of said script to fit the needs of your app, then, to call the script, simply run:

```
$ yarn deploy
```

## Notes regarding code and development

Kune UI is a highly opinionated themeable UI framework created by a team with more than a decade of experience building all sorts of highly scalable web apps.

With this said, we hold in high-esteem the following values:

- **Openness** - Kune UI is open source and will continue to be so in the foreseeable future. As such we're open to suggestions, feature requests, and we will do our best to address issues and updates as soon as possibble.
- **Minimalism** - Less is more. If you need crazy animations, gradients, or any other DOM breaking insanities, you can always fork this repo or build your own theme and go wild.
- **Simplicity** - We will add only as many features as needed to provide as much base value to as many projects as possible. This means following the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle). Complex solutions will be relegated to other packages as plug-ins.
- **Code Independance** - Javascript hell is a thing, and we're all dangling dangerously close to it daily. This project was initially created out of the need to run away from dependency-heavy solutions such as Material UI which break apps due to sub-dependency version clashes more often than not. With this said, we don't plan on re-discovering hot water, you'll probably find a few `// Copied from` comments sprinkled around wherever we decide to [steal like an artist](https://en.wikipedia.org/wiki/Steal_Like_an_Artist).
- **True Productivity** - We like to build things, not spend time fixing them, and we like to provide the same ability to our users with our code and tools. Its because of this that we will write tests where needed and adopt any workflow tools that keep this code base as error free as humanly possible.
- **Readability** - As humans, we'd rather write code that humans can understand. Code should always try to either be easy to understand, or be thoroughly commented to let the rest know how and why that one-liner is more optimal than a few functions.
- **Transparency** - If we mess up, we will own up to it and let you know through our official means of communication.

## LICENSE

Copyright 2017 Kune S.R.L.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
