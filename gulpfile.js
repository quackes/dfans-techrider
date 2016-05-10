var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');

gulp.task('default', function () {
    return gulp.src('techrider.md')
        .pipe(markdownpdf({
			cssPath: 'style.css'
		}))
        .pipe(gulp.dest('.'));
});