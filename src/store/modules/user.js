import {login, getInfo} from '@/api/user'
import {getToken, setToken} from '@/utils/auth'

const state = {
    token: getToken(),
    roles: [],
    name: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_NAME: (state, name) => {
        state.name = name
    }
}

const actions = {
    login({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({username: username.trim(), password: password}).then(response => {
                const {data} = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
            }).catch(err => reject(err))
        })
    },
    getInfo({commit}, sate) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const {data} = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                const {roles, name} = data

                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }
                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                resolve(data)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}