var gulp = require('gulp'),
    sync = require('browser-sync').create();

gulp.task('default', function () {
	sync.init({
		notify: false,
		server: { baseDir: './', },
	});
	gulp.watch('*-*/*').on('change', sync.reload);
});
