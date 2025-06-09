const [
    getRootHandler,
] = require('./handler.js');

const routes = [
    // Define the route for the root path
    {
        method: 'GET',
        path: '/',
        handler: getRootHandler,
    },
]

module.exports = routes;