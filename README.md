# ES6 Starter Project

Ready to go ES6 project for SPA template.

[![Travis build status](https://travis-ci.org/iondrimba/ES6StarterProject.svg?branch=master)](https://travis-ci.org/iondrimba/ES6StarterProject)

## Installation

```sh
 git clone https://github.com/iondrimba/ES6StarterProject.git
 cd ES6StarterProject
 npm install
 gulp
```

[Live demo]

TODO:

* Make Travis and Tests work


Features:

* ES6 ready
* Router system with pushstate (page.js)
* Templating engine (handlebars.js)
* Tests
* Module system CommonJs (browserify)

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

Testing:

* $ npm test

Includes:

* ES6 transpile via Babel
* BrowserSync
* Browserify
* Karma 
* Jasmine 
* Code Coverage (Coverall) not working yet
* Sass
* ESLint
* Scss Lint (Requires Ruby and [scss-lint])
* Imagemin (images optimization)
* Uglify
* Watch
* Html-Min
* Post-Css (autoprefixer)

Gulp Tasks:

* gulp (default)
* gulp deploy (run tasks without browser-sync and watch)
* gulp optimize (run optimization tasks)

Structure:

````bash
├── public/
│    ├─── js/  (.gitignored)
│    ├─── css/  (.gitignored)
│    ├─── images/
│    ├─── .htaccess
│    └─── index.html
│── spec/(jasmine tests)
│── src/
│    ├── scripts/
│    └── scss/
│    └── templates/
│── tasks/
│── test/(coverage report)
│
│── .gitignore
│── .travis.yml
│── karma.conf.js
│── gulpfile.js
│── lint.yml
│── package.json
└── README.md
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/ES6StarterProject/>
