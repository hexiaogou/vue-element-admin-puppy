const user = require('./user')
const article = require('./article')

const mocks = [...user,...article]

module.exports = { mocks }