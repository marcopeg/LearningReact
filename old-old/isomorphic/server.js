var http = require('http');
var fs = require('fs');
var browserify = require('browserify');
var literalify = require('literalify');
var Mustache = require('mustache');
var React = require('react');


var __SERVER_PORT__ = 3000;


/**
 * Dev HTTP Server
 * it serves few known pages based on the request's url.
 * whatever other request turns into a 404.
 */

var server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/':
            console.log('root');
            serveHomePage(req, res);
            break;
        case '/app-client.js':
            serveClientApp(req, res);
            break;
        case '/react.js':
            serveReact(req, res);
            break;
        case '/bootstrap.css':
            serveBootstrap(req, res);
            break;
        default:
            send404(res);
    }
}).listen(__SERVER_PORT__, function(err) {
    if (err) {
        throw err;
    }
    console.log('Listening on ' + __SERVER_PORT__ + '...');
});



/**
 * Implementation of the Known Pages
 */

function serveHomePage(req, res) {
    fs.readFile('./app/index.html', function(err, data) {
        if (err) {
            return send404(res);
        }

        var preRenderedApp = require('./app/app-server');
        // preRenderedApp = 'there is no app on the server!!!';

        var html = Mustache.render(data.toString(), {
            'react-app': preRenderedApp
        });

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
}

function serveClientApp(req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
        .transform(literalify.configure({react: 'window.React'}))
        .add('./app/app-client.js')
        .bundle()
        .pipe(res);
}

function serveReact(req, res) {
    fs.readFile('../node_modules/react/dist/react.min.js', function(err, data) {
        if (err) {
            return send404(res);
        }
        res.setHeader('Content-Type', 'text/javascript');
        res.end(data);
    });
}

function serveBootstrap(req, res) {
    fs.readFile('../node_modules/bootstrap/dist/css/bootstrap.min.css', function(err, data) {
        if (err) {
            return send404(res);
        }
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
    });
}

function send404(res) {
    res.statusCode = 404;
    res.end();
}
