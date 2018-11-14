/**
 * This file handles setting up both development and production servers.
 * 
 * If you're using `yarn export` or `next export` to generate static HTML,
 * none of the following code is relevant.
 */



// Load environment configurations from `.env` file, if any
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mime = require('mime');

// HTTP server
const express = require('express');

// Renderer of React into browser friendly app
const next = require('next');

// Allows apps on other domains to read content from ours in browser
const cors = require('cors');

// Adds ability to use data sent through POST request
const bodyParser = require('body-parser');

// Forces https using redirect
// (turned off on dev by code below, search for `server.use(yes())`)
const yes = require('yes-https');



// Loads API logic from local `./api` directory.
const api = require('./api');

// Load PORT environment variable from `.env` file or machine environment
// No port? No problem, use 3000 by default
const PORT = process.env.PORT || 3000;

// Load NODE_ENV environment variable from `.env` file or machine environment
const isDev = process.env.NODE_ENV !== 'production';

// Setup Next.js app and let it know if this is a Dev environment (a.k.a not `production`)
const app = next({ dev: isDev });

// Next.js magic
const handle = app.getRequestHandler();



app.prepare()
.then(() => {
  // Setup HTTP server
  const server = express();

  // If this is deployed to production, force using HTTPS
  if (!isDev) {
    server.use(yes());
  }

  // Let me be seen by other apps
  server.use(cors());

  // Allow Express.js server to parse data sent through POST request
  // as a JSON object
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // Setup API end-points and functionality
  api(server);

  // Statically serve `assets` directory as `assets` route
  server.use('/assets', express.static('assets'));

  // Serve favicon files as if from root
  server.get(/^\/((android-|apple-|fav|ms-)icon|browserconfig\.xml|manifest\.json)/, (req, res) => {
    const iconPath = path.join(__dirname, 'favicon', req.originalUrl);
    const extension = path.extname(iconPath);
    const iconFile = fs.readFileSync(iconPath);

    res.type(mime.getType(extension));
    res.send(iconFile);
  });

  // Let Next.js handle any request not handled in any previous line
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Make server live on the designated PORT
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
})
.catch((ex) => {
  // Tummy aches? Puke it out...
  console.error(ex.stack);

  // ...then pass out
  process.exit(1);
});
