import config from '../../config.json';
import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
var browserSync = require('browser-sync').create();
import error_handler from '../lib/error-handler';

const $ = gulpLoadPlugins();

const paths = {
  src: path.join(config.src.base, config.src.css, '**/*.scss'),
  dest: path.join(config.dist.dist, config.dist.css)
}

const compileCss = () => {
  return gulp
    .src(paths.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .on('error', error_handler)
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
}

gulp.task('compile:css', compileCss);

export { compileCss }