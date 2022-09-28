import Vue from 'vue'
import IconApron from '../package/index.js'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(IconApron)

new Vue({
  render: h => h(App)
}).$mount('#app')
