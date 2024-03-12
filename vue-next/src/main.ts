import './assets/main.css'
import IconApron from '../packages/index.ts'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(IconApron)
app.mount('#app')
