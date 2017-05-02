/**
 * Client App Entry Point
 * ======================
 *
 * it contains the necessary code to render the application to the
 * designed entry point, it should run on the browser.
 *
 */

var React = require('react');
var app = require('./app');

React.render(app, document.getElementById('app-target'));
