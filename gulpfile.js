const gulp = require('gulp');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const postcssPresetEnv = require('postcss-preset-env');

gulp.task('css', () => {
    let plugins = [
        autoprefixer
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});

gulp.task('purgecss', () => {
    return gulp.src('./src/*.css')
        .pipe(purgecss({
            safelist: [],
            content: ['src/**/*.html'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }))
        .pipe(gulp.dest('./dest'))
})

gulp.task('nano', () => {
    let nano = [
        cssnano
    ];
    return gulp.src('./dest/*.css')
        .pipe(postcss(nano))
        .pipe(gulp.dest('./dest'));
});