const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const runElectron = require('gulp-run-electron');

gulp.task('typescript', function () {
  const tsProject = ts.createProject('tsconfig.json');
  const tsResult = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());
  return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  return gulp.src(['src/index.html']).pipe(gulp.dest('dist'));
});

gulp.task('watcher', function () {
  gulp.watch('src/**/*.ts', gulp.series('typescript', runElectron.rerun));
  gulp.watch('src/index.html', gulp.series('html'));
});

gulp.task('electron', function () {
  return gulp.src('dist').pipe(runElectron(['dist/main.js']));
});

gulp.task('default', gulp.series('typescript', 'html', 'electron'));

gulp.task('watch', gulp.series('default', 'watcher'));