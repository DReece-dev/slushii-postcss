let postcss = require('gulp-postcss');
let gulp = require('gulp');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
let cssnested = require('postcss-nested');

gulp.task('css', function () {
    let plugins = [
        autoprefixer,
        cssnano(),
        cssnested
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});