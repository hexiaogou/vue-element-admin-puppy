import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
