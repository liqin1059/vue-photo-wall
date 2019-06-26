import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

import photoWall from './index.js'
Vue.use(photoWall)

new Vue({
  el: '#app',
  render: h => h(App)
})
