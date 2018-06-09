import Vue from 'vue'
import App from './App.vue'

import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: NotFound, name: 'notFound' },
        { path: '/', component: Home, name: 'home' }
    ]
})

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
    id: 'UA-43582384-3',
    router,
    debug: {
        sendHitTask: process.env.NODE_ENV === 'production'
    },
    checkDuplicatedScript: true
})

import './assets/css/app.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
