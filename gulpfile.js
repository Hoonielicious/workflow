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
	concat = require('gulp-concat'),

	/*
		Add a new package called gulp-browserify
		
		https://www.npmjs.com/package/gulp-browserify

		Description: Bundle modules with BrowserifyJS
	*/
	browserify = require('gulp-browserify'),

	/*
		Add a new package called gulp-compass to compile a Sass file

		https://www.npmjs.com/package/gulp-compass

		Description: Compile Sass to CSS using Compass
	*/
	compass = require('gulp-compass');

	/*
		Create an array that includes all the javascript files 
	*/
var jsSources = [
	'components/scripts/test1.js',
	'components/scripts/test2.js'
];

var sassSources = ['components/sass/styles.scss'];

// Log something during task with gulp-util package
gulp.task('log', function() {
	gutil.log("Workflows are awesome!")
});

gulp.task('js', function() {
	/* 
		Specify sources(jsSources)
		Concatnate them into a file (script.js)
		Bundle modules with Browserify
		Specify destination folder ('builds...')
	*/
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
	/* 
		Specify sources(sassSources)
		Compile the source file with Compass
		Specify destination folder ('builds...')
	*/
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('builds/development/css'))
});
