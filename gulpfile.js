import gulp from 'gulp';

import { path } from './gulp/config/path.js'
// import { plagins } from './gulp/config/plagins.js'

import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

import browserSync from 'browser-sync'
import imagemin from 'gulp-imagemin';

import { reset } from './gulp/tasks/reset.js';
import { build } from './gulp/tasks/build.js';
import { buildStyles } from './gulp/tasks/buildStyles.js';
import { buildScripts } from './gulp/tasks/buildScripts.js';


global.app = {
    gulp: gulp,
    path: path,
    concat: concat,
    sourcemaps: sourcemaps
}

function browser() {
    browserSync.init({
        server: {
            baseDir: app.path.srcFolder
        }
    });
}


function watcher() {
    app.gulp.watch([app.path.watch.scss], buildStyles)
    app.gulp.watch([app.path.watch.html]).on('change', browserSync.reload);

}

export const images = () => (
    app.gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(app.gulp.dest('dist/images'))
);

var defaultBuild = app.gulp.series(
    buildStyles,
    app.gulp.parallel(watcher, browser)
)

export const dist = app.gulp.series(
    reset,
    app.gulp.parallel(
        images, build
    )
)

export { buildStyles };
export { buildScripts };
export { watcher as watch };
export { browser as browserSync };
export { build };
export { reset };

export { defaultBuild as default };