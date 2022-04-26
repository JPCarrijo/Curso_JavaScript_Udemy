const { series, parallel } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJs(cb) {
  return gulp.src(['src/calculadora.js', 'src/testeCalculadora.js'])
    .pipe(babel({
      comments: false,
      presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'));
}

function fim(cb) {
  console.log('Fim');
  return cb();
}

exports.default = series(transformacaoJs, fim);
// exports.default = parallel(transformacaoJs, fim);