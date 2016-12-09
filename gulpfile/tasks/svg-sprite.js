import config from '../../config.json';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import error_handler from '../lib/error-handler';
import chalk from 'chalk';
import path from 'path';

const $ = gulpLoadPlugins();

const paths = {
  src:`${config.src.base + config.src.images.base + config.src.images.svg.base + config.src.images.svg.sprite}**/*`,
  dest: `${config.dist.base + config.dist.images.base + config.dist.images.svg.base + config.dist.images.svg.sprite}`,
  assets: path.resolve(__dirname, '../../')
}

const svg_sprite_config = {
  log: "debug",
  shape: {
    dimension: {
      maxWidth: 30,
      maxHeight: 30,
      attributes: true
    },
    spacing: {
      padding: 10,
    },
  },
  dest: config.dist.base,
  mode: {
    css: {
      dest: '.',
      sprite: `${paths.dest}/sprite.css.svg`,
      render: {
        scss: {
          dest: config.src.base + 'scss/_____generic/_generic.svg-sprite.scss',
        },
      },
    },
    symbol: {
      dest: paths.dest,
      sprite: 'sprite.svg',
      inline: false,
    },
  },
};

const svg_sprite = () => {
  gulp
    .src(paths.src)
    .pipe($.changed(paths.dest))
    .pipe($.svgSprite(svg_sprite_config))
    .on('error', error_handler)
    .pipe(gulp.dest(paths.assets))
}

gulp.task('svg:sprite', svg_sprite);

export default svg_sprite;