const gulp = require('gulp');
const ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('typescript', function () {
  const tsProject = ts.createProject('tsconfig.json');

  var tsResult =  tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());

  return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('dist'));
});
gulp.task('html', function() {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('typescript', 'html'));
