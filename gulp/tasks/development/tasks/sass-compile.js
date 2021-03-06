'use strict';

const $                    = require('gulp-load-plugins')();
const gulp                 = require('gulp');
const config               = require('../../../config');
let autoprefixer           = require('gulp-autoprefixer');
let sass                   = require('gulp-sass');
var cleanCSS               = require('gulp-clean-css');
const browsersync          = require('browser-sync');

var   reload       = browsersync.reload;
module.exports = function(options) {
    return function(callback) {
        gulp.src(config.sass.src)
            .pipe($.sourcemaps.init())
            .pipe(sass())
            .on('error', $.notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                };
            }))
            .pipe(cleanCSS({ advanced: true }))
            .pipe(autoprefixer(config.autoprefixer))

            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.sass.dest))
            .pipe($.if(global.isWatching, reload({stream:true})));
        callback();
    };
};
