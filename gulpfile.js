var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    eslint = require('gulp-eslint');

require('babel/register');

gulp.task('lint', function () {
    return gulp
        .src(['./src/app/**/*.js', './src/tests/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', ['lint'], function () {
    return gulp
        .src('./tests/**/*.js', {read: false})
        .pipe(mocha());
});

gulp.task('watch', function () {
    gulp.watch(['./src/app/**/*', './tests/**/*'], ['default']);
});

gulp.task('default', ['test']);
