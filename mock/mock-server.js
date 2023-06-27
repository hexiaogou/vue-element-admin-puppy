const bodyParser = require('body-parser')
const Mock = require('mockjs')

function registerRoutes(app) {
    const {mocks} = require('./index.js')
    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
    })
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
    }
}

// for mock server
const responseFake = (url, type, respond) => {
    return {
        url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        type: type || 'get',
        response(req, res) {
            console.log('request invoke:' + req.path)
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    registerRoutes(app)
}