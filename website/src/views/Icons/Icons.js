import Footer from '../../components/Footer'
import Header from '../../components/Header'
import IconPad from '../../components/IconPad'
import { CATEGORYS, ICONS, RenderAsList } from './data/icons'
export default {
  components: {
    Header,
    Footer,
    IconPad
  },
  data () {
    return {
      list: [],
      category: CATEGORYS,
      iconCount: ICONS.length
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.list = RenderAsList()
      console.log('icon count total:', this.iconCount)
      console.log('category count total:', CATEGORYS.length)
    }
  }
}
