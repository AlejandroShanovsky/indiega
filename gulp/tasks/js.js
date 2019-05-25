var gulp = require('gulp');
var include = require("gulp-include");
// var uglify = require('gulp-uglify');
// var babel = require('gulp-babel');
var config = require('../config');
var browserSync = require('browser-sync');
reload = browserSync.reload;


gulp.task('js', function () {
    gulp.src([
        config.src.js + '/**/*.js',
        '!' + config.src.js + '/functions/**/*.js',
        '!' + config.src.js + '/lib/**/*.js',
    	])
        .pipe(include()).on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        // .pipe(babel())
        .pipe(gulp.dest(config.dest.js+'/'));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'/**/*', ['js']);
});
