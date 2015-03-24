/**
 * Server App Entry Point
 * ======================
 *
 * it produces the pre-rendered HTML to be injected into the
 * designed entry points, it is ment to run on the server.
 *
 */

var React = require('react');
var app = require('./app');

module.exports = React.renderToString(app);
