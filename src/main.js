import Vue from 'vue'
import App from './App'

import '@/styles/index.scss'

import router from './router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})