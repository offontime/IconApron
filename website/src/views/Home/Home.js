import Header from '../../components/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      searchKeyword: '',
      blueCirclePosition: '',
      greenCirclePosition: '',
      prevScrollTop: 0,
      scrollTop: 0,
      designer: [
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/kimi.avatar.JPG',
          name: '田昊天',
          github: 'https://github.com/mitkimi'
        },
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/xinzai.avatar.JPG',
          name: '万 鑫',
          github: 'https://github.com/mitkimi'
        }
      ],
      developer: [
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/kimi.avatar.JPG',
          name: '田昊天',
          github: 'https://github.com/mitkimi'
        },
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/xinzai.avatar.JPG',
          name: '万 鑫',
          github: 'https://github.com/mitkimi'
        },
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/abcd.avatar.JPG',
          name: '孙永豪',
          github: 'https://github.com/mitkimi'
        },
        {
          avatar: 'http://cdn.illiaccess.com/images/funplus-ui/miniocean.avatar.JPG',
          name: '小海洋',
          github: 'https://github.com/mitkimi'
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    scrollTop (next, current) {
      setTimeout(() => {
        if (next === window.scrollY) {
          // 滚动结束
          this.prevScrollTop = next
          this.circlePositionSet()
        }
      }, 100)
      if (current === this.prevScrollTop) {
        // 滚动开始
      }
    }
  },
  methods: {
    init () {
      // init
      this.circlePositionSet()
      document.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY
      })
    },
    circlePositionSet () {
      this.setBlueCirclePosition()
      this.setGreenCirclePosition()
    },
    setBlueCirclePosition () {
      // 蓝色圆圈运动轨迹
      const y = window.scrollY
      const pageHeight = document.body.clientHeight
      const viewHeight = window.innerHeight
      const transitionY = (viewHeight - 450) * (y / pageHeight)
      this.blueCirclePosition = `${transitionY}px`
    },
    setGreenCirclePosition () {
      // 绿色圆圈运动轨迹
      const y = window.scrollY
      const pageHeight = document.body.clientHeight
      const viewHeight = window.innerHeight
      const transitionY = (viewHeight * (1 - (y / pageHeight)) - 280) * 0.6
      this.greenCirclePosition = `${transitionY}px`
    },
    handleGoSite (url, target = 'current') {
      if (target === 'current') window.location.href = url
      if (target === 'blank') window.open(url)
    }
  }
}
