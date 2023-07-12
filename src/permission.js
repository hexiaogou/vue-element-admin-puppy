import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
    // get token by login
    await store.dispatch('user/login',{username: 'admin',password:''})
    // get roles by getInfo
    const { roles } = await store.dispatch('user/getInfo')
    // get permission_routes by generateRoutes
    await store.dispatch('permission/generateRoutes', roles)
    next()
})