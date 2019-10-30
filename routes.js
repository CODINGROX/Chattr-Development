const fs = require('fs');
const express = require('express');
const db = require('./db');
module.exports.router = express.Router();

const pages = ['home', 'friends', 'create', 'games', 'profile', 'settings'];
// a dict of route: file, must be logged in
module.exports.AUTHED_ROUTES = {};
pages.forEach((page) => {
    module.exports.AUTHED_ROUTES[`/${page}`] = __dirname + `/public/pages/${page}.html`
});


module.exports.router.get('/js/:f', function (req, res) {
    let fname = __dirname + '/public/js/' + req.params.f;
    if (fs.existsSync(fname)) {
        res.sendFile(fname);
    } else {
        res.sendStatus(404);
    }
});

module.exports.router.get('*', (req, res, next) => {
    if (req.url in module.exports.AUTHED_ROUTES) {
        db.checkLogin(req, res).then(() => {
            res.sendFile(module.exports.AUTHED_ROUTES[req.url]);
        });
    } else {
        next();
    }
});
