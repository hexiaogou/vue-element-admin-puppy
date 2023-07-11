import router from './router'

import {login} from '@/api/user'

router.beforeEach(async (to, from, next) => {
    login({username: 'admin', password: ''}).then(response => {
        const {data} = response
        console.log(data)
    })
    next()
})