var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scss']);
