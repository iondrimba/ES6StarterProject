const gulp = require('gulp');

module.exports = function () {
    gulp.watch('./src/scripts/**/*.js', ['eslint', 'browserify']),
        gulp.watch('./src/images/*', ['imagemin']),
        gulp.watch('./src/scss/**/*.scss', ['sass', 'scsslint']),
        gulp.watch('./src/templates/**/*.html', ['browserify']);
};
