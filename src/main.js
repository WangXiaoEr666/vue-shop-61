import Vue from 'vue'
import App from './App'
import router from './router'
// 导入自定义全局css样式
import '@/assets/css/global.css'
// 导入图标字体的css样式
import './assets/fonts/iconfont.css'
// 完整导入element-ui
import ElementUI from 'element-ui'
// 注册ui组件
Vue.use(ElementUI)
// 导入axios
import axios from 'axios'
// 配置axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
