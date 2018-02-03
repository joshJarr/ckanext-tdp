module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'cssnano': true,
    'autoprefixer': true,
    'postcss-mixins': true,
    'postcss-simple-vars': true,
    'postcss-extend': true,
    'postcss-nested': true,
  }
})
