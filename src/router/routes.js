import Vue from 'vue'
import VueRouter from 'vue-router'
import IntroScreen from '../components/introScreen/IntroScreen'
import Planning from '../components/planning/Planning'

// import Sale from '../components/sale/Sale'
// import Estinment from '../components/estinment/Estinment'
// import Sale from '../components/sale/Sale.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IntroScreen',
    component: IntroScreen
  },
  {
    path: '/planning',
    name: 'Planning',
    component: Planning
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
