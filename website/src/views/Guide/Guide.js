import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import DocumentMarkdown from './Guide.md'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      DocumentMarkdown
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      highlightCode()
    }
  }
}
