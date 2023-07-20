import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/layout',
        component: Layout,
        hidden: true
    }
]

export const asyncRoutes = []

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router