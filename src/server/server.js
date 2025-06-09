const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
            files: {
                relativeTo: path.join(__dirname, 'public')
            }
        }
    });

    await server.register([
        {
            plugin: require('@hapi/inert') // For serving static files
        },
        {
            plugin: require('@hapi/vision') // For template rendering, if needed}]);
        }
    ]);

    await server.views({
        engines: {
            ejs: require('ejs') // Using EJS for templating
        },
        relativeTo: path.join(__dirname, 'public'), // Directory for views
    });

    // Register routes
    server.route(routes);

    
    server.ext('onPreResponse', (request, h) => {
        // Handle Errors
        const response = request.response;
        if (response instanceof Error) {
            return h.response({ error: 'Resource not found' }).code(404).takeover();
        }

        return h.continue;
    });
    
    // Start the server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}

init();

process.on('unhandledRejection', (err) => {
    console.error(err.stack);
    process.exit(1);
});