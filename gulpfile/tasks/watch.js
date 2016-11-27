import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../../config.json';

const watch_task = () => {
  const paths = {
    views: `${config.src.base + config.src.views}**/*`,
    scss: `${config.src.base + config.src.css}**/*.scss`
  }
  // watch views
  gulp.watch(paths.views, ['move:views'])

  // watch sass
  gulp.watch(paths.scss, ['compile:css']);
}

gulp.task('watch', ['browser-sync'], watch_task);

export { watch_task };