import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/home/test',
        name: 'Test',
        component: Test
      }]
    }
  ]
})
