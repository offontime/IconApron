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
      quickOrderVisible: false,
      hasBackground: false,
      path: '/'
    }
  },
  watch: {
    '$route.path': (next) => {
      this.path = next
    }
  },
  mounted () {
    const { path } = this.$route
    this.path = path
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    document.removeEventListener('scroll')
  },
  methods: {
    handleMenuItemClick (item) {
      const { type, to } = item
      if (type === 'route') {
        this.$router.push({
          path: to
        })
      }
    },
    onScroll () {
      // 滚动时候的情况
      const top = window.scrollY
      this.hasBackground = top > 100
      console.log(top)
    }
  }
}
