'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', [], function() {
  return gulp
    .src(['src/img/**/*'], {base: './src'})
    .pipe(imagemin())
    .pipe(gulp.dest('build'));
});

gulp.task('vendor', [], function() {
  return gulp.src([
    'bower_components/bootstrap/dist/**/*',
    'bower_components/fontawesome/**/*',
    'bower_components/roboto-fontface/**/*',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-slidedeck/angular-slidedeck.min.*',
  ], {base: './bower_components'})
    .pipe(gulp.dest('build/vendor'));
});
