const Mock = require('mockjs')
const {constantRoutes, asyncRoutes} = require('./routes')

const routes = [...constantRoutes, ...asyncRoutes]

const roles = [
    {
        key: 'admin',
        name: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
        routes: routes
    },
    {
        key: 'editor',
        name: 'editor',
        description: 'Normal Editor. Can see all pages except permission page',
        routes: routes.filter(i => i.path !== '/permission')// just a mock
    }
]

module.exports = [
    // mock get all routes form server
    {
        url: '/vue-element-admin-puppy/routes',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: routes
            }
        }
    },

    // mock get all roles form server
    {
        url: '/vue-element-admin-puppy/roles',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: roles
            }
        }
    },

    // add role
    {
        url: '/vue-element-admin-puppy/role',
        type: 'post',
        response: {
            code: 20000,
            data: {
                key: Mock.mock('@integer(300, 5000)')
            }
        }
    }
]