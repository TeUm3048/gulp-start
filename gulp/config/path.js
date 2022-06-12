import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        css: `${buildFolder}/css/`
    },
    src: {
        fonts: `${srcFolder}/fonts/**/*`,
        css: `${srcFolder}/css/**/*.css`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,


    },
    filesToBuild: {
        fonts: `${srcFolder}/fonts/**/*`,
        js: `${srcFolder}/js/main.min.js`,
        css: `${srcFolder}/css/**/*.css`,
        html: `${srcFolder}/*.html`,


    },
    watch: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`

    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}