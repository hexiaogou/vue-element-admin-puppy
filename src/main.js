import Vue from 'vue'
import Element from 'element-ui'
import 'normalize.css/normalize.css'

import App from './App'
import router from './router'

import './icons'
import './styles/element-variables.scss'
import '@/styles/index.scss'

Vue.use(Element)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})