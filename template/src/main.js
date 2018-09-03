// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'

Vue.config.productionTip = false

// 引入mockjs
/* global __MOCK__:false */
console.log(__MOCK__)
if (__MOCK__) {
  require('./mock/mock.js')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('getYMD', function (input) {
  return input.split(' ')[0]
})
