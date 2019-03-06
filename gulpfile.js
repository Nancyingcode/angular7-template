//导入工具包  require（‘node_modules里对应模块’）
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify');
imagemin = require('gulp-imagemin');
htmlmin = require('gulp-htmlmin');
cssmin = require('gulp-minify-css');
babel = require('gulp-babel');

//定义一个testJS任务（自定义任务名称）
gulp.task('minJS', function () {
    gulp.src('prod/*.js') //该任务针对的文件
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify()).on('error', function(e){
            console.log(e);
         }) //该任务调用的模块
        .pipe(gulp.dest('dist')); //输出路径
});
//定义一个testImagemin任务压缩image
gulp.task('minNZ', function () {
    gulp.src('prod/assets/fill/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/assets/fill'));
    gulp.src('prod/assets/outline/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/assets/outline'));
    gulp.src('prod/assets/twotone/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/assets/twotone'));
        gulp.src('prod/assets/pic/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/assets/pic'));
});


gulp.task('testImage', function () {
    gulp.src('prod/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist'));
});

//定义一个testHtmlmin任务压缩html
gulp.task('minHtml', function () {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true //压缩HTML
    };
    gulp.src('prod/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});
//定义一个testCssmin任务压缩css
gulp.task('minCss', function () {
    gulp.src('prod/*.css')
        .pipe(cssmin({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist'));
    gulp.src('prod/assets/*.css')
        .pipe(cssmin({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/assets'));
});