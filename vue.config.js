'use strict'

module.exports = {
    devServer: {
        port: 9527,
        open: true,
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        name: 'puppy'
    }
}

