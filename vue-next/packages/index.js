import IconApron from './IconApron'

const components = [
  IconApron
]

const install = function (Vue) {
  if (install.installed) {
    return false
  }
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  IconApron
}
