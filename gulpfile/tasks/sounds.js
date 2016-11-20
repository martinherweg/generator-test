import config from '../../config.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins()

const copySounds = () => {
  return gulp
    .src(config.src.src + config.src.sounds + '**/*')
    .pipe($.changed(config.dist.dist + config.dist.sounds))
    .pipe(gulp.dest(config.dist.dist + config.dist.sounds))
}

gulp.task('sounds', copySounds);
module.exports = copySounds;
