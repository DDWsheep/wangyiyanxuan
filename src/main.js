/*
入口文件
 */
import Vue from 'vue'


import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split'


import './mock/mockSever.js'



Vue.component('Split', Split)


/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
