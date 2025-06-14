const [
    getRootHandler, postRegisterUserHandler
] = require('./handler.js');

const [
    getHomePage,
] = require('./page-handler.js');

const path = require('path');

const routes = [
    // Pages
    {
        method: 'GET',
        path: '/home',
        handler: getHomePage,
    },
    // Auth Server
    {
        method: 'POST',
        path: '/api/users/register',
        handler: postRegisterUserHandler,
    },
    // Utils
    {
        method: 'GET',
        path: '/',
        handler: getRootHandler,
    },
    {
        method: 'GET',
        path: '/files/{any*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'public'),
                index: ['index.html'],
            }
        }
    }
]

module.exports = routes;