import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { createRouter } from './router'

Vue.use(VueRouter )
Vue.config.productionTip = false
const router = createRouter()
//const store = createStore()
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
