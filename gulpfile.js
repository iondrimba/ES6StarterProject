'use strict';
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//html min 
gulp.task('html-min', require('./tasks/html-min.js'));

//css min 
gulp.task('minify-css', require('./tasks/minify-css.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

// Default Task
gulp.task('default', gulpsync.sync(['scsslint', 'sass', 'lint', 'browserify', 'browser-sync', 'watch']));

//optimization task isolated because of the asynchronous problems gulp has
gulp.task('optimize', gulpsync.sync(['minify-css', 'html-min', 'uglify', 'imagemin']));

//publish Task
gulp.task('deploy', gulpsync.sync(['scsslint', 'sass', 'lint', 'imagemin', 'browserify']));

//coveralls
//gulp.task('coveralls', require('./tasks/coveralls.js'));

