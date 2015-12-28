var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
    plumber = require('gulp-plumber');



gulp.task('less', function() {
    return gulp.src('./resources/public/less/**/*.less')
               .pipe(plumber())
               .pipe(less({plugins: [autoprefix, cleancss]}))
               // .pipe(gulp.dest('./resources/public/css'))
               .pipe(gulp.dest('../www/static/css'));
});

gulp.task('html', function() {
    return gulp.src('./resources/public/*.*')
               .pipe(gulp.dest('../www/'));
});

// for index.html and redirect.html
gulp.task('watch', function() {
    return gulp.watch(['./resources/public/less/**/*.less', './resources/public/*.*'], ['less', 'html']);
});


gulp.task('default', ['less', 'html', 'watch']);
