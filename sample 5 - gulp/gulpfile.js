const { src, dest, watch } = require('gulp'); // 1
var sass = require('gulp-sass');

exports.default = function (done) { // 2
    console.log("Hello from my first task");
    done()
}

exports.copy = function () {
    return src('src/*.scss')
        .pipe(dest('output'));
}

function build() {
    return src('src/main.scss')
        .pipe(sass())
        .pipe(dest('output'));
}

exports.build = build;

exports["build:watch"] = function () {
    return watch('src/*.scss', build);
}
