module.exports = {
  loaders: {
    scss: 'vue-style!css!sass'
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}