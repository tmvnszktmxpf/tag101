const conn = require('./db');
const template = require('./template.js');


logout_process = function (request, response) {
    request.logout(function (err) {
        if (err) { return next(err); }
        request.session.save(function () {
            response.redirect('/');
        })
    });
};


authIsOwner = function (request, response) {
    if (request.user) {
        return true;
    } else {
        return false;
    }
};

authStatusUI = function (request, response) {
    const isAdmin = authIsOwner(request, response);
    if (isAdmin) {
        return `${request.user.name} | <a href="/login/logout_process">logout</a>`;
    }
    else {
        return `
            <a href="/login/google"> Login with google </a>
        `;
    }

};

exports.logout_process = logout_process;
exports.authIsOwner = authIsOwner;
exports.authStatusUI = authStatusUI;