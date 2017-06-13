// Telling npm to bring in gulp library and assinging it to the variable
var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('log', function() {
	gutil.log("Workflows are awesome!")
});
