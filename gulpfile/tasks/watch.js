/**
 * Watch Views, CSS, Images, SVGs
 */

import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../../config.json';

const watch_task = () => {
  const paths = {
    views: `${config.src.base + config.src.views}**/*`,
    scss: `${config.src.base + config.src.css}**/*.scss`,
    images: [
      `${config.src.base + config.src.images.base}**/*`,
      `!${config.src.base + config.src.images.base}svg/**/*`,
    ],
    svgSprite: `${config.src.base + config.src.images.base + config.src.images.svg.base + config.src.images.svg.sprite}`
  }

  // watch images
  gulp.watch(paths.images, ['move:images']);

  // watch svg sprite
  gulp.watch(paths.svgSprite, ['svg:sprite']);

  // watch views
  gulp.watch(paths.views, ['move:views']);

  // watch sass
  gulp.watch(paths.scss, ['compile:css']);
}

gulp.task('watch', ['browser-sync'], watch_task);

export { watch_task };