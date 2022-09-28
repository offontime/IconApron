export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    getCopymessage (target) {
      if (target === 'vue') return `<IconApron name="${this.data.name}" />`
      if (target === 'vuenext') return `<IconApron name="${this.data.name}" />`
      if (target === 'react') return `<IconApron name='${this.data.name}' />`
    },
    onCopy () {
      this.$message.success(`图标「${this.data.text}」 代码复制成功`)
    },
    onError () {
      this.$message.error('复制失败，请稍候再试')
    }
  }
}
