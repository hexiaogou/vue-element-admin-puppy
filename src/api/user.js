import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/vue-element-admin-puppy/user/login',
        method: 'post',
        data
    })
}