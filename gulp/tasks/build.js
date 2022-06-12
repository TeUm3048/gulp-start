

export const build = () => {
    return app.gulp.src(
        [
            app.path.filesToBuild.css,
            app.path.filesToBuild.fonts,
            app.path.filesToBuild.html,
            app.path.filesToBuild.js,
        ],
        {
            allowEmpty: true,
            base: app.path.srcFolder,
        })
        .pipe(app.gulp.dest(app.path.buildFolder));
}
