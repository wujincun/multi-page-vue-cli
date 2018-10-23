import Vue from 'vue'
import Router from 'vue-router'
import demoA  from 'views/home/components/demoA.vue';
import demoB  from 'views/home/components/demoB.vue';

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'demoA'}
    },
    {
      path: '/demoA',
      name: 'demoA',
      component: demoA
    },
    {
      path: '/demoB',
      name: 'demoB',
      component: demoB
    },
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
export default router