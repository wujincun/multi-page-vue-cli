import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'

Vue.use(Router)
let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/views/list.html',
      component: hello
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
export default router