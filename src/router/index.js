import Vue from 'vue'
import Router from 'vue-router'
import find from '@/views/find/find.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: find
    }
  ]
})
