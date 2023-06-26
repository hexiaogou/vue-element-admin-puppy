'use strict'

module.exports = {
    devServer: {
        port: 9527,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        before: require('./mock/mock-server.js')
    }
}

