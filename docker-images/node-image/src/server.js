'use strict';

const Hapi = require('hapi');
const jsonPayloadGen = require('./jsonPayloadGen.js');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 8888
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply(jsonPayloadGen.generatePayload());
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
