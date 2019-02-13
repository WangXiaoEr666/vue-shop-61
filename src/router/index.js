import Vue from 'vue'
import Router from 'vue-router'
// 导入登录模块
import Login from '@/components/Login'
// 导入后台主页面模块
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
