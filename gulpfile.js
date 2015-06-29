var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var clean = require('gulp-rimraf');
var zip = require('gulp-zip');


 
gulp.task('browserify',['clean'], function() {
    return browserify('./src/app/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./tmp/js/'));
});

gulp.task('compress', ['browserify'], function(){
	return gulp.src('./tmp/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'))		
});


gulp.task('csslib', function(){
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('./public/css/lib'))
});
gulp.task('clean',function(){
		gulp.src('./public/js/*.js',{read: false})
		.pipe(clean());
});


gulp.task('build',['compress','csslib'], function(){
	return gulp.src('./tmp',{read: false})
		.pipe(clean());
});

gulp.task('package',['build'], function () {
	return gulp.src('**/*')
		.pipe(zip('package.zip'))
		.pipe(gulp.dest('build'));
});