//Variables
const { src, dest, watch, series, parallel } = require("gulp");

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var plumber = require("gulp-plumber");
var cssnano = require("cssnano");

//Path of the folders
var themename = "novin";
(root_folder = "../" + themename + "/"), (scss = root_folder + "sass/");
inc = root_folder + "inc/";
src_folder = root_folder + "src/";
dist_folder = root_folder + "dist/";

// File paths
const files = {
	scssPath: scss + "/style.scss",
};

//functions for gulp 4 verison
function browser_sync() {
	browserSync.init({
		open: "external",
		proxy: "novin.test",
	});
}

//Reload Browser
function reload(done) {
	browserSync.reload();
	done();
}

// Sass task: compiles the style.scss file into style.css
function css() {
	return src(files.scssPath)
		.pipe(plumber())
		.pipe(sourcemaps.init()) // initialize sourcemaps first
		.pipe(
			sass({
				outputStyle: "expanded",
				indentType: "tab",
				indentWidth: "1",
			})
		) // compile SCSS to CSS
		.on("error", console.error.bind(console))
		.pipe(postcss([autoprefixer("last 2 versions", "> 5%", "Firefox ESR"), cssnano()])) // PostCSS plugins
		.pipe(sourcemaps.write(root_folder)) // write sourcemaps file in current directory
		.pipe(dest(root_folder)) // put final CSS in root_folder
		.pipe(browserSync.stream());
}
exports.css = css;

//Watch files
function watchTask() {
	//reload if there is a change in the sass folder
	watch(root_folder + "sass/**/*.scss", series(css, reload));
	//reload if there is a change in the patterns folder
	watch(root_folder + "patterns/**/*.scss", series(css, reload));
	//reload if there is a change in any of the php files
	watch(root_folder + "**/*.php", reload);
	//reload if there is a change in any of the src files
	watch(root_folder + "src/**/*.js", reload);
	//reload if there is a change in any of the inc files
	watch(root_folder + "inc/**/*", reload);
	//reload if there is a change in any of the src files
	watch(dist_folder + "**/*", reload);
}
exports.watch = watchTask;

//exports.default = parallel(css,watchTask,browser_sync);
exports.default = parallel(css, browser_sync, watchTask);

//Image optimization
var image = require("gulp-image");
var newer = require("gulp-newer");

// Optimize images through gulp-image
img = root_folder + "/img/**/*.{png,jpg,JPG,jpeg,JPEG,svg,gif,bmp,webp}";
img_folder = root_folder + "/img";

function compress_images(done) {
	gulp.src(img).pipe(newer(img)).pipe(image()).pipe(gulp.dest(img_folder));
	return done();
}

// Optimize uploads through gulp-image
uploads = "../../uploads/**/*.{png,jpg,JPG,jpeg,JPEG,svg,gif,bmp,webp}";
uploads_folder = "../../uploads";

function compress_uploads(done) {
	gulp.src(uploads).pipe(newer(uploads)).pipe(image()).pipe(gulp.dest(uploads_folder));
	return done();
}

/* It is not working with watching files from gulp 4, it is an endless loop, so I just run it once every other day*/
exports.compress = series(compress_images, compress_uploads);
exports.compress_images = compress_images;
exports.compress_uploads = compress_uploads;

//Webp Converter
const cwebp = require("gulp-cwebp");

webp_folder_src = "../../webp-converter/src/**/*.{jpg,jpeg,png,PNG,svg}";
webp_folder_dist = "../../webp-converter/dist";

function webp_converter(done) {
	gulp.src(webp_folder_src).pipe(cwebp()).pipe(gulp.dest(webp_folder_dist));
	return done();
}

exports.webp_converter = webp_converter;
