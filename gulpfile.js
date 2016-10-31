var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');


//
// Static Server + watching scss/html files
//
gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/scss/**/*.*", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});



//
// Compile Sass into CSS & auto-inject into browsers
//
gulp.task('sass', function() {
  return gulp.src("app/scss/**/*.*")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
