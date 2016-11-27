import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../../config.json';

const watch_task = () => {
  // watch sass
  gulp.watch(config.src.base + config.src.css + '**/*.scss', ['compile:css']);
}

gulp.task('watch', ['browser-sync'], watch_task);

export { watch_task };