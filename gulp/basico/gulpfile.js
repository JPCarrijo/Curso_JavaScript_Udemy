const gulp = require('gulp');
const parallel = gulp.parallel;
const series = gulp.series;

const antes1 = cb => {
  console.log('Antes 1');
  return cb();
}

const antes2 = cb => {
  console.log('Antes 2');
  return cb();
}

function copiar(cb) {
 //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
 gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB')); // transformações de arquivos
  return cb();
}

const fim = cb => {
  console.log('Fim');
  return cb();
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim,
);