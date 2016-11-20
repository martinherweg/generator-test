const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const config = require('./config');
const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');
const PUBLIC_PATH = path.join(projectRoot, 'dist/');
const vueConfig = require('./vue-loader-config');

module.exports = {
  devtool: 'source-map',
  context: path.join(projectRoot, 'src'),
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.join(PUBLIC_PATH, 'assets/'),
    publicPath: '/assets/',
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        },
      },

    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: false,
          failOnWarning: false,
          configFile: './.eslintrc.js',
          formatter: require('eslint-formatter-pretty'),
        },
      },
    }),
  ],
};
