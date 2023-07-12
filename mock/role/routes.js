const constantRoutes = [
    {
        path: '/login',
        component: 'views/login/index',
        hidden: true
    },
    {
        path: '/404',
        component: 'views/error-page/404',
        hidden: true
    },
    {
        path: '/401',
        component: 'views/error-page/401',
        hidden: true
    },
    {
        path: '/documentation',
        component: 'layout/Layout',
        children: [
            {
                path: 'index',
                component: 'views/documentation/index',
                name: 'Documentation',
                meta: {title: 'Documentation', icon: 'documentation', affix: true}
            }
        ]
    }
]

const asyncRoutes = [
    {
        path: '/permission',
        component: 'layout/Layout',
        redirect: '/permission/index',
        alwaysShow: true,
        meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'page',
                component: 'views/permission/page',
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    roles: ['admin']
                }
            },
            {
                path: 'directive',
                component: 'views/permission/directive',
                name: 'DirectivePermission',
                meta: {
                    title: 'Directive Permission'
                }
            },
            {
                path: 'role',
                component: 'views/permission/role',
                name: 'RolePermission',
                meta: {
                    title: 'Role Permission',
                    roles: ['admin']
                }
            }
        ]
    },

    {
        path: '/icon',
        component: 'layout/Layout',
        children: [
            {
                path: 'index',
                component: 'views/icons/index',
                name: 'Icons',
                meta: {title: 'Icons', icon: 'icon', noCache: true}
            }
        ]
    }
]

module.exports = {
    constantRoutes,
    asyncRoutes
}