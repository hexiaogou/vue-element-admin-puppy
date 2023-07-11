import Vue from 'vue'
import App from './App'

import Element from 'element-ui'
import '@/styles/index.scss'

import router from './router'

import './permission'

Vue.use(Element)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})