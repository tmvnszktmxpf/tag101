const express = require('express')
const router = express.Router();
const login = require('../lib/login');



module.exports = function (passport) {

    router.get('/logout_process', (req, res) => {
        login.logout_process(req, res);
    })

    router.post('/login_process', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    }));

    router.post('/login_process', (req, res) => {
        login.login_process(req, res);
    })

    return router;
}

