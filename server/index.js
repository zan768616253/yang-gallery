const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors')

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(cors())
app.disable('etag');

const routes = require('./routes')
app.use('/', routes);

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`))
