import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/vue-element-admin-puppy/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/vue-element-admin-puppy/user/info',
        method: 'get',
        params: { token }
    })
}