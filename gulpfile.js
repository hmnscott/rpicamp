const {src, dest, watch} = require("gulp");
const pug = require("gulp-pug");

function html() {
    return src("src/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(dest("dist"));
}

exports.html = html;


const sass = require("gulp-sass")(require("sass"));

function css() {
    return src("src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/css/"));
}

exports.css = css;


exports.watch = function() {
    watch("src/*.pug", html);
    watch("src/css/*.scss", css);
}