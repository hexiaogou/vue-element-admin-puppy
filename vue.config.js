'use strict'

module.exports = {
    devServer: {
        port: 9527,
        before: require('./mock/mock-server.js')
    }
}

