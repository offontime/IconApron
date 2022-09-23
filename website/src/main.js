import FunPlus from 'funplus-ui'
import 'funplus-ui/lib/funplus-ui.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.less'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(FunPlus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
