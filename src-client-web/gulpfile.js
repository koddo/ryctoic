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
               .pipe(gulp.dest('../priv/static/css'));
});

gulp.task('watch', function() {
    gulp.watch('./resources/public/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']); // Default will run the 'entry' watch task
