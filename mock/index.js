const user = require('./user')
const role = require('./role')

const mocks = [
    ...user,
    ...role
]

module.exports = { mocks }