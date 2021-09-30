const gulp = require('gulp');
const postcss = require('gulp-postcss');
// Plugins
const autoprefixer = require('autoprefixer');
const rucksack = require('rucksack-css');
const cssnext = require('cssnext');

gulp.task('css', function () {
    var processors = [
        autoprefixer,
        rucksack,
        cssnext
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});