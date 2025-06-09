const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const dotenv = require('dotenv');
dotenv.config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
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

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});