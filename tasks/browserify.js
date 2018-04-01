const gulp = require('gulp');
const source = require('vinyl-source-stream');
const stringify = require('stringify');
const browserify = require('browserify');
const babelify = require('babelify');

module.exports = function () {
  stringify.registerWithRequire({
    extensions: ['.txt', '.html'],
    minify: true,
    minifier: {
      extensions: ['.html']
    }
  });

  const bundleStream = browserify('./src/scripts/app.js')
    .transform(babelify, {
      'presets': ['env']
    })
    .transform(stringify(['.html']))
    .bundle();

  bundleStream
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'))
};
