import path from 'path';
import webpack from 'webpack';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import WriteFilePlugin from 'write-file-webpack-plugin';
import CopyFiles from 'copy-webpack-plugin';

import webpack_config from './webpack_config';
import * as utils from './webpack_utils';

const projectRoot = path.resolve(__dirname, '../');
export default {
  devtool: 'source-map',
  context: path.join(projectRoot),
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: process.env.NODE_ENV === 'production' ? webpack_config.build.assetsPublicPath : webpack_config.dev.assetsPublicPath,
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
    },
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules/')]
  },
  externals: {
    'Modernizr': 'Modernizr'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        },
      },

    ],
  },

  plugins: [
    new CopyFiles([
      {
        context: './src/views/',
        from: '**/*',
        to: '../craft/templates',
        ignore: ['site-header.html', 'site-scripts.html'],
      }
    ]),
    new WriteFilePlugin(),
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
