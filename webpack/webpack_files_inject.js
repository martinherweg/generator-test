import config from '../config.json';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import webpack_base_config from './webpack.base.config.babel';

// define parts where webpack files get injected

  const chunks_inject = [
    {
      filename: '../craft/templates/parts/document-header.html',
      file: config.src.base + config.src.views + 'parts/site-header.html',
      inject: false
    },
    {
      filename: '../craft/templates/parts/document-footer.html',
      file: config.src.base + config.src.views + 'parts/site-scripts.html',
      inject: false
    }
  ]


// inject HtmlWebpackPlugin into baseConfig
// generate dist index.html with correct asset hash for caching.
// you can customize output by editing /index.html
// see https://github.com/ampedandwired/html-webpack-plugin
chunks_inject.forEach((chunk) => {
  const plugin = new HtmlWebpackPlugin({
    filename: chunk.filename,
    template: chunk.file,
    inject: chunk.inject,
    minify: false,
// necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
  })

  const write_plugin = new WriteFilePlugin({
    log: false
  });

  webpack_base_config.plugins.push(plugin);
  webpack_base_config.plugins.push(write_plugin);
})