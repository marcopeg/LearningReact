var React = require('react');
var HelloWorld = require('./hello-world');

module.exports = React.createElement(HelloWorld, {
    text: 'Hello World!'
});
