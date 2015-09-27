var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    stylus = require('stylus');


module.exports = function(app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());
    app.use(session({secret: 'halt halt hilipatitippaa'}));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public/',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public/'));

}