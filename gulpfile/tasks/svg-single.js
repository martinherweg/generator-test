/**
 * Task for simple copy of svg Files
 * then they get renamed so you can use them online
 * also get the single files out of the sprite folder, because you never know
 */

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../../config.json';
import error_handler from '../lib/error-handler';
import util from 'util';
import through from 'through2';

const $ = gulpLoadPlugins();

const paths = {
  src: [
    `${config.src.base + config.src.images.base + config.src.images.svg.base + config.src.images.svg.single}**/*.svg`,
    `${config.src.base + config.src.images.base + config.src.images.svg.base + config.src.images.svg.sprite}**/*.svg`
  ],
  dest: `${config.dist.base + config.dist.images.base + config.dist.images.svg.base + config.dist.images.svg.single}`,
  dest_inline: `${config.dist.views}`
}

const copy_vectors = () => {
  return gulp
    .src(paths.src)
    .pipe($.imagemin())
    .on('error', error_handler)
    .pipe($.cheerio({
      run($, file) {
        let file_name = file.path;
        let file_base = file.base;
        file_name = file_name.replace(file_base, '');
        file_name = file_name.replace('.svg', '')
        $('svg').addClass('icon-' + file_name.toLowerCase())
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe($.rename({
      extname: '.svg.html'
    }))
    .pipe(gulp.dest(`${paths.dest_inline}svg/`))
}

gulp.task('svg:single', copy_vectors);

export default copy_vectors;