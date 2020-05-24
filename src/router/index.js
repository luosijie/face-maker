import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/pages/home/Index.vue')
const Test = () => import(/* webpackChunkName: "Test" */'@/pages/test/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/test/(home|index)',
    name: 'Test',
    component: Test,
  }]
})
