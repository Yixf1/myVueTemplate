import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layouts/Login'
import Template from '@/layouts/Template'
import HelloWorld from '@/pages/Hello'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Template,
      children: [
        {
          path: '',
          name: '测试',
          component: resolve => require.ensure([], () => resolve(HelloWorld, 'hello')),
          desc: '测试'
        }
      ]
    }, {
      path: '/test',
      name: 'hello',
      component: Login,
      children: [
        {
          path: '',
          name: '测试',
          component: resolve => require.ensure([], () => resolve(Hello, 'hello')),
          desc: '测试'
        }
      ]
    }
  ]
})
