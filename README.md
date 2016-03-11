# ES6 Starter Project

Ready to go ES6 project starter with Tests and Coverage.

[![Travis build status](https://travis-ci.org/iondrimba/ES6StarterProject.svg?branch=master)](https://travis-ci.org/iondrimba/ES6StarterProject) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/ES6StarterProject/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/ES6StarterProject?branch=master)


#### Requires:

* NodeJs
* Gulp

## Installation

```sh
 git clone https://github.com/iondrimba/ES6StarterProject.git 
 cd ES6StarterProject
 npm install
 gulp
```

### [Live demo]
 
#### GOAL:
Reduce time spent by developers looking to work today with all the new ES6 features, it also includes Tests and Coverage. I chose to leave it simple as possible(no MV* Framework dependecy).


#### TODO:

* Write more tests


#### Features:

* ES6 ready
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
[Live demo]:<http://iondrimba.github.io/ES6StarterProject/>
