var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
    entry: [
        path.join(__dirname, '/server.js')
    ],
    target: 'node',
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: buildPath,
        filename: "server.js"
    }
};

