'use strict';
//Get environment variables
require('dotenv').config();

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const proxy = require('express-http-proxy');
const port = process.env.PORT;

const app = express();

//set up proxy for request to server
const apiProxy = proxy(process.env.PROXY_URL, {
  proxyReqPathResolver: function (req, res) {
    return require('url').parse(req.originalUrl).path;
  }
});

// Proxy all request to /api to server using apiProxy options
app.use("/api/*", apiProxy);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`App running on ${port}, serving from /dist folder`));
