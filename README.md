# Generator-FireShell [![Build Status](https://travis-ci.org/thejameskyle/generator-fireshell.png)](https://travis-ci.org/thejameskyle/generator-fireshell)

Fiercely quick front-end boilerplate and workflows for [Yeoman](http://yeoman.io).

The opinionated FireShell framework. Built for the modern developer. For teams and the individual, encouraging a better workflow. JavaScript task running, build processes, autominification and file concatenation, wrapped with an enhanced HTML5 boilerplated framework.

* Source: [github.com/toddmotto/fireshell](http://github.com/toddmotto/fireshell)
* Homepage: [getfireshell.com](http://getfireshell.com)
* Twitter: [@getfireshell](http://twitter.com/getfireshell)

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Get started with FireShell:

To install generator-fireshell from npm, run:

```
$ npm install -g generator-fireshell
```

Finally, initiate the generator:

```
$ yo fireshell
```


## Documentation

Read the developer [documentation](//github.com/toddmotto/fireshell/blob/master/docs/DOCS.md) on FireShell for further reading and learning. You may need to install a few assets before you can get started, such as Node, Git, Grunt.

## Features

Here are some of the main features of FireShell:

* HTML5 framework, WAI-ARIA roles and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Includes jQuery CDN and relative fallback
* Includes Modernizr and HTML5 Shiv
* Google Universal Analytics snippet
* Open source workflow with Grunt.js running on Node.js
* Two `.command` (Mac OS X) and `.bat` (Windows) files for double-click command-line execution of FireShell
* Automatic Grunt dependency installation, directory relocation and grunt tasks
* Dynamically appended copyright for JS/CSS
* Livereloading the browser and file injection upon changes
* Annotated Gruntfile.js for extending
* Built-in build script for auto-minification of CSS and JavaScript files for production
* Pre-setup Sass/SCSS files and folders for baseline project structure and imports
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting
* No superfluous code comments
* Extremely lightweight footprint

## Scaffolding

````
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── docs
├── grunt-build.command
├── grunt-build.bat
├── grunt-dev.command
├── grunt-dev.bat
├── package.json
├── README.md
├── .editorconfig
├── .gitignore
├── .jshintrc
└── .travis.yml
````

## Contributing

Steps to contributing:

* Create your feature branch, commit changes and push to origin
* Submit a Pull Request with details on your feature branch

Guidelines:
* Non-trivial changes should be discussed in an issue first
* Do not create issues for support reasons, use [Stack Overflow](http://stackoverflow.com)

FireShell is maintained by [Todd Motto](//github.com/toddmotto) and it's contributors; [Jean-Philippe Sirois](//github.com/jpsirois), [Noah Bass](//github.com/noahbass), [Bernard Chhun](//github.com/bchhun), [Chris Missal](//github.com/ChrisMissal), [Mihai Ionut Vilcu](//github.com/ionutvmi), [Octavio Amuchastegui](//github.com/octavioamu).

## Roadmap

Projected roadmap for FireShell and it's subsets builds.

* Integrate Grunt-init to allow for initial project naming (for dynamic CSS/JS banners)
* LESS.css variant (`less` dir inside `src`), keeping Sass as default but providing Gruntfile.js setup
* AngularJS FireShell build with MVC scaffolding
* Bower as package manager
* Static HTML Includes FireShell build (emulates server-side includes)
* PHP FireShell spawning a `localhost` with relevant includes
* Create a Yeoman generator for FireShell

## License

#### The MIT License (MIT)

Copyright (c) FireShell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
