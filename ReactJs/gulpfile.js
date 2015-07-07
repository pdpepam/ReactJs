var gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(connect.reload())
});


gulp.task('jsx', function(){
    gulp.src('src/*.jsx')
        .pipe(connect.reload())
});



gulp.task('css', function(){
    gulp.src('src/*.css')
        .pipe(connect.reload())
});

gulp.task('js', function(){
    gulp.src('./src/**/**/*.js')
        .pipe(connect.reload())
});

gulp.task('jsx', function(){
    gulp.src('./src/**/**/*.jsx')
        .pipe(connect.reload())
});


gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 8000,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(['./src/css/*.css'], ['css']);

    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./src/*.jsx'], ['jsx']);
    gulp.watch(['./src/*.css'], ['css']);
    gulp.watch(['./src/**/**/*.js'], ['js']);

});

gulp.task('default',['connect', 'watch']);