import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';

// Images

const images = () => {
  gulp.task('images', () => {
    return gulp.src('source/images/**/*.{png,jpg,svg}')
      .pipe(imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpestran({ progressive: true }),
        imagemin.svgo()
      ]))
      .pipe(gulp.dest("source/images"));
  })
}

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css'))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, server, watcher
);
