/**
 * This file is a starting point to begin adding API functionality to your
 * Kune UI based app.
 * 
 * The functionality you add here will be available as long as you run your
 * app using `yarn dev`, `yarn start`, or `node server.js`.
 * 
 * If you're using `yarn export` or `next export` to generate static HTML,
 * you should consider moving this logic out to it's own "back-end" project.
 */
module.exports = exports = function api(server) {
  server.get('/api/v1', async (req, res) => {
    res.send('{"status": "ok"}');
  });
};
