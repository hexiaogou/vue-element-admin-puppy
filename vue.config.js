'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 9527,
        open: true,
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        name: 'puppy',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}

