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
      iconCount: ICONS.length,
      element: {
        iconNav: [],
        iconContent: []
      },
      timer: null
    }
  },
  mounted () {
    this.init()
    const nav = document.getElementsByClassName('icon-category-item')
    const content = document.getElementsByClassName('icon-group')
    this.element.iconNav = nav
    this.element.iconContent = content
    window.addEventListener('beforeunload', (e) => {
      window.scroll(0, 0)
    })
    window.addEventListener('scroll', this.toScroll)
  },
  methods: {
    init () {
      this.list = RenderAsList()
      console.log('icon count total:', this.iconCount)
      console.log('category count total:', CATEGORYS.length)
    },
    // 点击导航切换楼层并滚动
    toggleCategory (index, $event) {
      const { iconContent } = this.element
      const floorOffsetTop = iconContent[index].offsetTop - 20
      const windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const timer = {
        step: 50,
        times: 50,
        floorOffsetTop
      }
      document.querySelector('.active').classList.remove('active')
      $event.target.classList.add('active')
      if (windowScrollTop > floorOffsetTop) {
        this.setFloorScrollArrowUp(timer)
      } else if (windowScrollTop === floorOffsetTop) {
        return false
      } else {
        this.setFloorScrollArrowDown(timer)
      }
      // document.documentElement.scrollTop = iconContent[index].offsetTop - 20
    },
    // 向上滚动
    setFloorScrollArrowUp (timer) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        const windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (windowScrollTop <= timer.floorOffsetTop) {
          document.documentElement.scrollTop = timer.floorOffsetTop
          document.body.scrollTop = timer.floorOffsetTop
          clearInterval(this.timer)
        } else {
          document.documentElement.scrollTop = windowScrollTop - timer.step
          document.body.scrollTop = windowScrollTop - timer.step
        }
      }, timer.times)
    },
    // 向下滚动
    setFloorScrollArrowDown (timer) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        const windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (windowScrollTop + 500 >= timer.floorOffsetTop) {
          document.documentElement.scrollTop = timer.floorOffsetTop
          document.body.scrollTop = timer.floorOffsetTop
          clearInterval(this.timer)
        } else {
          document.documentElement.scrollTop = windowScrollTop + timer.step
          document.body.scrollTop = windowScrollTop - timer.step
        }
      }, timer.times)
    },
    // 屏幕滚动切换导航
    toScroll () {
      const { iconNav, iconContent } = this.element
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      for (let i = 0, len = iconContent.length; i < len; i++) {
        const offset = iconContent[i].offsetTop - 50
        if (scrollTop >= offset) {
          for (let n = 0; n < len; n++) {
            n === i ? iconNav[n].classList.add('active') : iconNav[n].classList.remove('active')
          }
        }
      }
    },
    // 返回顶部
    toTop () {
      document.documentElement.scrollTop = 0
      document.querySelector('.active').classList.remove('active')
      this.element.iconNav[0].classList.add('active')
    }
  }
}
