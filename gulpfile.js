var gulp = require('gulp'); //находит папку и подключает
var runSequence = require('run-sequence').use(gulp);
var pug = require('gulp-pug');
var del = require('del');
var sass = require('gulp-sass');
var watch = require('gulp-watch');//автоматическая замена измененных параметров
var plumber = require('gulp-plumber');//не выбивает gulp в случае ошибок в коде
var gutil = require('gulp-util');
var babel = require('gulp-babel'); //из нового js стварую версию js
// gulp.task('htmltohtml',function(){
//  return  gulp.src('src/index.html').pipe(gulp.dest('dist'))
// })
//
// gulp.task('default', function(){
//  runSequence('htmltohtml')
// })

gulp.task('watch',['pug','sass','js','assets'], function(){
   gulp.watch(['src/scss/*.scss','src/scss/components/*.scss'],['sass']);
   gulp.watch(['src/pug/*.pug','src/pug/components/*.pug'],['pug']);
   gulp.watch(['src/assets/**/*'],['assets']);
   gulp.watch(['src/js/*'],['js']);
});

gulp.task('pug',function(){
 return  gulp.src('src/pug/*.pug')
             .pipe(plumber())
             .pipe(pug())
             .on('error',gutil.log)//выводим ошибки в console
             .pipe(gulp.dest('dist'))
})

gulp.task('js',function () {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(babel({presets: ['env']}))
        .on('error',gutil.log)//выводим ошибки в console
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('dist/assets/js'));
})

gulp.task('sass',function(){
 return gulp.src('src/scss/*.scss')
            .pipe(plumber())
            .pipe(sass())
            .on('error',gutil.log)//выводим ошибки в console
            .pipe(gulp.dest('dist/assets/css'));
})

gulp.task('assets',function(){
    return gulp.src('src/assets/**/*')
               .pipe(gulp.dest('dist/assets'));

})

gulp.task('clean', function() {
 return del.sync('dist');
})

gulp.task('cssvendor',function(){
  return gulp.src('src/scss/vendor/**/*')
             .pipe(gulp.dest('dist/assets/css/vendor'));
})

gulp.task('default', function(){
 runSequence('clean','assets','cssvendor',['pug','sass','js'],'watch')
})


//npm install jquery --save-dev
//npm install run-sequence --save-dev
// gulp
// npm install -g gulp установка программы в систему
//npm install gulp-pug --save-dev
//mpm install del --save-dev
//npm install gulp-sass --save-dev
//npm install gulp-wathc --save-dev
//npm install gulp-plumber --save-dev
//npm install gulp-util --save-dev
//npm install gulp-babel --save-dev
//npm install babel-core --save-dev
//mpm install babel-preset-env --save-dev
