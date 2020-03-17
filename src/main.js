import Vue from 'vue'
import App from './App'
import './registerServiceWorker'
import router from './router/routes'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')