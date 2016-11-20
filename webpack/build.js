require('shelljs/global');
env.NODE_ENV = 'production';

const path = require('path');
const config = require('./config');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config.babel.js');

const spinner = ora('building for production...');
spinner.start();

webpack(webpackConfig, function(err,stats) {
  spinner.stop()
  if(err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n');
});