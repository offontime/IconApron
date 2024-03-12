import type { App } from '@vue/runtime-core'
import "virtual:svg-icons-register"
import Icon from './icon.vue'

export { Icon }

const components = [Icon]
const IconApron = {
  install (app: App) {
    components.forEach((item) => {
      app.component(item.name, item)
    })
  }
}

export default IconApron
