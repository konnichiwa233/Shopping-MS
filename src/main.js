import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//引入全局样式
import './assets/css/global.css'
//引入字体图标
import './assets/fonts/iconfont.css'
//引入组件
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://192.168.2.88:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
