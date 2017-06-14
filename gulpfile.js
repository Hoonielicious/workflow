// Tell npm to bring in gulp library and assign it to the variable
var gulp = require('gulp'),
	/*
		Add a new package called gulp-util

		https://www.npmjs.com/package/gulp-util

		Description: Utility functions for gulp plugins
	*/
	gutil = require('gulp-util'), 

	/*
		Add a new package called gulp-concat

		https://www.npmjs.com/package/gulp-concat

		Description: Concatenates files
	*/
	concat = require('gulp-concat');

	/*
		Create an array that includes all the javascript files 
	*/
var jsSources = [
	'components/scripts/test1.js',
	'components/scripts/test2.js'
];

// Log something during task with gulp-util package
gulp.task('log', function() {
	gutil.log("Workflows are awesome!")
});

gulp.task('js', function() {
	/* 
		Specify sources(jsSources)
		Concatnate them into a file (script.js)
		Specify destination folder ('builds...')
	*/
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
});
