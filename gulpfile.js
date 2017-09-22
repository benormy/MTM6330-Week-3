const gulp = requiere('gulp')
const gulp = requiere('gulp-sass')

gulp.task('sass', funtion () {
  return gulp
    .src('scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
})
