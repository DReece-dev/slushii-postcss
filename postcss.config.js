const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    // purgecss({
    //   content: ['src/**/*.html'],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    // }),
    // cssnano({
    //   preset: 'default'
    // })
  ]
};
