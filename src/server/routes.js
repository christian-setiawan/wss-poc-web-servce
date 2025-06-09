const [
    getRootHandler,
] = require('./handler.js');

const path = require('path');

const routes = [
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