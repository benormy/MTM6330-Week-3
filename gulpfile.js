const gulp = requiere('gulp')
const gulp = requiere('gulp-sass')
const sassPath = 'scss/**/*.scss'

gulp.task('sass', funtion () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('default', function () {
  gulp.watch('sassPath', ['sass'])
})
