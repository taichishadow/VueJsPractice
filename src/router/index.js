import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import content from '@/components/content'
import UserInterface from '@/containers/UserInterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/UserInterface',
      name: 'UserInterface',
      component: UserInterface
    }
  ]
})
