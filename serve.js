#!/usr/bin/env node

'use strict';

var path = require('path');

var express = require('express');


main();

function main() {
    var app = express();

    var port = process.env.PORT || 3000;
    var halfDay = 43200000;

    app.configure(function() {
        app.set('port', port);

        app.use(express.logger('dev'));
        app.use(express.compress());
        app.use(express.json());
        app.use(express['static'](path.join(__dirname, 'dist'), {
            maxAge: halfDay
        }));

        app.use(app.router);
    });

    app.configure('development', function() {
        app.use(express.errorHandler());
    });

    // http://stackoverflow.com/a/13227831/228885
    app.use(function(req, res) {
        // Use res.sendfile, as it streams instead of reading the file into memory.
        res.sendfile(__dirname + '/dist/index.html');
    });

    process.on('exit', terminator);

    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS',
    'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGPIPE', 'SIGTERM'
    ].forEach(function(element) {
        process.on(element, function() { terminator(element); });
    });

    app.listen(port, function() {
        console.log('%s: Node (version: %s) %s started on %d ...', Date(Date.now() ), process.version, process.argv[1], port);
    });
}

function terminator(sig) {
    if(typeof sig === 'string') {
        console.log('%s: Received %s - terminating Node server ...',
            Date(Date.now()), sig);

        process.exit(1);
    }

    console.log('%s: Node server stopped.', Date(Date.now()) );
}
