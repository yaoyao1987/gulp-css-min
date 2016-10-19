/*
 * @Author: ly.yao
 * @Date:   2016-04-29 11:41:10
 * @Last Modified by:   ly.yao
 * @Last Modified time: 2016-05-05 15:37:07
 */

'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'), //gulp常用的工具库
    cleanCss = require('gulp-clean-css'), //清理压缩css
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'), //压缩js
    clean = require('gulp-clean'); //清空文件夹

//编译css
gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest(''));
});
