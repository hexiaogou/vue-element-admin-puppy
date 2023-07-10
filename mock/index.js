const article = require('./article')
const user = require('./user')

const mocks = [
    ...article,
    ...user
]

module.exports = { mocks }