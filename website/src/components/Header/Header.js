import LogoLight from '@/assets/images/logo-light.svg'
import LogoDark from '@/assets/images/logo.svg'
import Menu from './menu'

export default {
  name: 'PageHeaderComponent',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    magic: Boolean,
    blur: Boolean
  },
  data () {
    return {
      menu: Menu,
      logo: this.magic ? (this.theme === 'dark' ? LogoDark : LogoLight) : (this.theme === 'light' ? LogoDark : LogoLight),
      quickOrderVisible: false
    }
  },
  mounted () {
  },
  methods: {
    handleMenuItemClick (item) {
      const { type, to } = item
      if (type === 'route') {
        this.$router.push({
          path: to
        })
      }
    }
  }
}
