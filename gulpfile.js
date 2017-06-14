// Gulp API docs : https://github.com/gulpjs/gulp/blob/master/docs/API.md




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
	compass = require('gulp-compass'),

	/*
		Add a new package called gulp-connect to start a server

		https://www.npmjs.com/package/gulp-connect

		Description: Gulp plugin to run a webserver (with LiveReload)
	*/
	connect = require('gulp-connect');

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
		.pipe(connect.reload())
});

gulp.task('compass', function() {
	/* 
		Specify sources(sassSources)
		Compile the source file with Compass
		Load config without config.rb
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
		.pipe(connect.reload())
});

	/* 
		watch task: watches source files and execute taks within brackets.
		Notice the way every scss file is under watch. 
	*/
gulp.task('watch', function() {
	gulp.watch('components/sass/**/*.scss', ['compass']);
	gulp.watch(jsSources, ['js']);
});
	
	/*
		Starts a server and live reloads
	*/
gulp.task('connect', function() {
	connect.server({
		root: 'builds/development/',
		livereload: true
	});
});

// Issue tasks in sequence and by default
gulp.task('default', ['js', 'compass', 'connect', 'watch']);
