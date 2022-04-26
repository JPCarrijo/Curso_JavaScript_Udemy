const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function monitorarArquivos() {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }));
}

function servidor(cb) {
  watch('src/**/*.html', () => gulp.series('appHtml')());
  watch('src/assets/sass/**/*.scss', () => gulp.series('appCss')());
  watch('src/assets/js/**/*.js', () => gulp.series('appJs')());
  watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')());
  
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor
};