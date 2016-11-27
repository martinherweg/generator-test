import config from '../../config.json';
import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import yargs from 'yargs';
import browserSync from 'browser-sync';
import error_handler from '../lib/error-handler';
import postCSS_config from '../lib/postCSS_config';
import postCSS_nano from '../lib/postCSS_nano';

const argv = yargs.argv;

const $ = gulpLoadPlugins();

const paths = {
  src: path.join(config.src.base, config.src.css, '**/*.scss'),
  dest: path.join(config.dist.dist, config.dist.css)
}

const compileCss = () => {
  const env = argv.env || 'development'
  return gulp
    .src(paths.src)
    .pipe($.if(env === 'development', $.sourcemaps.init()))
    .pipe($.sass())
    .on('error', error_handler)
    .pipe($.postcss(postCSS_config()))
    .pipe($.if(env === 'development', $.sourcemaps.write('.')))
    .pipe($.if(env === 'production', $.postcss(postCSS_nano())))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
}

gulp.task('compile:css', compileCss);

export { compileCss }