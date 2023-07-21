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
        hidden: true,
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
            icon: '404'
        },
        children: [
            {
                path: 'index',
                component: Layout,
                name: 'layout-sub',
                meta: { title: 'Layout Sub', icon: 'guide', noCache: true }
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