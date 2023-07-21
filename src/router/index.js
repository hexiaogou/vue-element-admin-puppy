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
        hidden: false,
        meta: {
            title: 'Not Pages',
            icon: '404'
        }
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true,
        meta: {
            title: 'Error Pages',
            icon: '401'
        }
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true,
        meta: {
            title: 'Auth-Redirect',
            icon: '404'
        }
    },
    {
        path: '/layout',
        component: Layout,
        hidden: false,
        meta: {
            title: 'Layout Page',
            icon: 'guide'
        },
        children: [
            {
                path: 'index',
                component: Layout,
                name: 'layout-sub',
                meta: { title: 'Layout Sub-1', icon: 'guide', noCache: true }
            },
            {
                path: 'index',
                component: Layout,
                name: 'Layout Sub-2',
                meta: { title: 'Layout Sub', icon: 'bug', noCache: true }
            }
        ]
    }
]

export const asyncRoutes = []

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router