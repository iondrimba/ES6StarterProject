# ES6 Starter Project

Ready to go ES6 project starter with Tests and Coverage.

[![Travis build status](https://travis-ci.org/iondrimba/es6starterproject.svg?branch=master)](https://travis-ci.org/iondrimba/es6starterproject) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/es6starterproject/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/es6starterproject?branch=master)


#### Requires:

* NodeJs
* Gulp

## Installation

```sh
 git clone https://github.com/iondrimba/es6starterproject.git 
 cd es6starterproject
 npm install
 gulp
```

### [Live demo]

#### GOAL:
Reduce time spent by developers looking to work today with all the new ES6 features, it also includes Tests and Coverage. I chose to leave it simple as possible (no MV* Framework dependency).


#### TODO:

* Write more tests

![Alt text](picture.png)

#### Features:

* ES6 ready
* SemVer (Automated package and files versioning)
* Router system with pushstate (page.js)
* Templating engine (handlebars.js)
* Tests (Jasmine + karma)
* Coverage (Coveralls)
* CI (Travis)
* Module system CommonJs (browserify)

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

#### Testing:

* $ npm test

#### Includes:

* ES6 transpile via Babel
* BrowserSync
* Browserify
* Karma 
* SemVer
* Jasmine 
* Code Coverage
* Sass
* ESLint
* Scss Lint (Requires Ruby and [scss-lint])
* Imagemin (images optimization)
* Uglify
* Watch
* Html-Min
* Post-Css (autoprefixer)

####Gulp Tasks:

* gulp (default)
* gulp deploy (run tasks without browser-sync and watch)
* gulp optimize (run optimization tasks)
* gulp bump-patch / minor / major (update files with version number)

__Semantic Versioning:__

The bump-versions tasks should be executed after your deploy task
The task will rename the file app.js to app.version.js, the same will be done to the app.css.
After that the index.html is updated with the new file references.

#### Structure:

````bash
├── public/
│    ├─── css/ 
│    ├─── js/
│    ├─── images/
│    ├─── .htaccess
│    └─── index.html
│
│── spec/(jasmine spec files)
│
│── src/
│    ├── images/
│    ├── scripts/
│	 │    ├─── core/ 
│	 │    ├─── models/
│	 │    ├─── partials/
│	 │    ├─── views
│	 │    └─── app.js
│	 │
│	 ├── scss/
│	 │    ├─── components/ 
│	 │    ├─── partials/
│	 │    ├─── views/
│	 │    └─── app.scss
│	 │
│    └── templates/
│
│── tasks/
│
│── .gitignore
│── .travis.yml
│── gulpfile.js
│── karma.conf.js
│── LICENSE
│── lint.yml
│── package.json
└── README.md
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/es6starterproject/>
