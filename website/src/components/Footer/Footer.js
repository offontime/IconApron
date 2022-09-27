import Social from './social'
import LogoDark from '../../assets/images/logo.svg'
import LogoLight from '../../assets/images/logo-light.svg'

export default {
  name: 'PageFooterComponent',
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
      social: Social,
      logo: this.magic ? (this.theme === 'dark' ? LogoDark : LogoLight) : (this.theme === 'light' ? LogoDark : LogoLight)
    }
  }
}
