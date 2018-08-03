import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
// import Login from '@/components/user/login/index'
// const Login = r => require.ensure([], () => r(require('@/components/user/login/index.vue')), 'login')

// userInfo
// const UserInfo = r => require.ensure([], () => r(require('@/components/user/info/index.vue')), 'info')

// user
// const User = r => require.ensure([], () => r(require('@/components/user/index.vue')), 'user')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    
        {
          path: '/login',
          component(resolve){
            require(['@/components/user/login/index.vue'], resolve)
          }
        },
        {
          path: '/info',
          component(resolve){
            require(['@/components/user/info/index.vue'], resolve)
          }
        }
     
      ]
    

})
