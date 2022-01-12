const gulp = require('gulp');
const postcss = require('gulp-postcss');
// Plugins
const autoprefixer = require('autoprefixer');
const cssnested = require('postcss-nested');
const cssnano = require('cssnano');

gulp.task('css', function () {
    let plugins = [
        autoprefixer,
        cssnested,
        cssnano
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});