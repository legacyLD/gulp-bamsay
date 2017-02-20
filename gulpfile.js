var gulp = require('gulp');
var sass = require("gulp-sass");
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
gulp.task('default', defaultTask)

function defaultTask(){
  console.log('I am soooo gulpable!')
};

gulp.task ('date', function(){
  console.log(Date.now())
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
return gulp.src('./css/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./css/'))
});
