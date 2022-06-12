import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify-es';

export function buildScripts() {
    return app.gulp.src("app/scss/style.scss")
        .pipe(concat("main.min.js"))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("./maps"))
        .pipe(app.gulp.dest("js/"));

}
