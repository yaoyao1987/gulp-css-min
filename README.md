# vue-css-min

	最近朋友问了一个问题，在不用less、sass的情况下，怎么对HTML文件中的css进行合并，并且替换html中的css的链接。
	在segmentfault上找了下，感谢hjzheng童鞋，给出了解决方案，即gulp-useref。

## Build Setup

``` bash
# install dependencies
npm install

# 替换html中的css文件
npm html
```

## 实现

```js
var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});
```

Blocks are expressed as:

```html
<!-- build:<type>(alternate search path) <path> <parameters> -->
... HTML Markup, list of script / link tags.
<!-- endbuild -->
```

##	参考
[gulp-useref](https://github.com/jonkemp/gulp-useref)
