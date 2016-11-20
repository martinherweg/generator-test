const config = require('./config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const base_webpack_config = require('./webpack.base.config.babel');
const html_webpack_plugin = require('html-webpack-plugin');
const dashboard_plugin = require('webpack-dashboard/plugin');


//add hot-reload related code to entry chunks
Object.keys(base_webpack_config.entry).forEach(function (name) {
  base_webpack_config.entry[name] = ['../webpack/dev-client.js'].concat(base_webpack_config.entry[name]);
})

module.exports = merge(base_webpack_config, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new dashboard_plugin({ port: 3002 }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
  ]
})