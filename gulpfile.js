const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
// const purgecss = require('gulp-purgecss');

gulp.task('css:dev', () => {
    return gulp.src('./site.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('precss'),
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        .pipe(gulp.dest('./css/'));
});

gulp.task('css:prod', () => {
    return gulp.src('./site.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('precss'),
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        // .pipe(purgecss({ content: ['**/*.html'] }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('dist', () => {
    return gulp.src([
        'index.html',
        'favicon.ico',
        '*css/**/*',
        '*fonts/**/*'
    ]).pipe(gulp.dest('./dist/'));
});