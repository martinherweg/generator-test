import config from '../../config.json';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import error_handler from '../lib/error-handler';
import chalk from 'chalk';
import path from 'path';

const $ = gulpLoadPlugins();

const paths = {
  src: [
    `${config.src.base + config.src.images.base}**/*`,
    `!${config.src.base + config.src.images.base}svg/**/*`,
  ],
  dest: `${config.dist.base + config.dist.images.base}`
}

const copy_images = () => {
  gulp
    .src(paths.src)
    .pipe($.changed(paths.dest))
    .pipe($.imagemin())
    .on('error', error_handler)
    .pipe(gulp.dest(paths.dest))
}

gulp.task('move:images', copy_images);

export default copy_images;