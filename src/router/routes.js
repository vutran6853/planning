import Vue from 'vue'
import VueRouter from 'vue-router'
import IntroScreen from '../components/introScreen/IntroScreen'
import Planning from '../components/planning/Planning'
import WhereTo from '../components/whereTo/WhereTo'
import Calendar from '../components/calendar/Calendar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IntroScreen',
    component: IntroScreen
  },
  {
    path: '/whereTo',
    name: 'WhereTo',
    component: WhereTo
  },
  {
    path: '/planning',
    name: 'Planning',
    component: Planning
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
