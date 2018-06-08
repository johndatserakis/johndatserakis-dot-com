import Vue from 'vue'
import App from './App.vue'

import './assets/css/app.scss';

import Home from './components/Home.vue'
Vue.component('home', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
