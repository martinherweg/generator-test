import config from '../../config.json';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';

const $ = gulpLoadPlugins();

const paths = {
  src: `${config.src.base + config.src.views}**/*`,
  dest: `${config.dist.views}`
}

const move_views = () => {
  gulp
    .src(paths.src)
    .pipe($.changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
}

gulp.task('move:views', move_views);

export default move_views;