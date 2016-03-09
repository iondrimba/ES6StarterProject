var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function() {
    return gulp.src(['./src/scripts/**/*.js'])
        .pipe(eslint({
            globals: {
                jQuery: false,
                $: true
            },
            env: {
                browser: true,
                es6: true,
                node: true
            },
            ecmaFeatures: {
                arrowFunctions: true,
                 modules: true
            },
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module"
            },
            rules: {
                eqeqeq: 1,
                curly: 2,
                quotes: [2, 'single']
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
};