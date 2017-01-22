var gulp = require('gulp');
var browserSync = require('browser-sync')
	.create();

module.exports = function () {
	browserSync.init({
		//server: "./public",
		proxy: "http://www.bbc.com",
		//files: ["public/css/app.css", "public/js/*.js", "public/*.html"],
		browser: ["chrome", "firefox"],
		//browser: ["chrome", "firefox", "iexplore"],
	});

	gulp.watch("./public/css/app.css")
		.on('change', browserSync.reload);
	gulp.watch("./public/js/app.js")
		.on('change', browserSync.reload);
};
