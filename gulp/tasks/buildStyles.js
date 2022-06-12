import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const buildStyles = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions', '> 1%'],
            cascade: false
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(browserSync.stream());

}
