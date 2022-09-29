<template>
  <span :class="['icon-apron', `ap-${name}`]"></span>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconApron',
  props: {
    name: {
      type: String,
      default: 'icon-apron'
    }
  }
})
</script>
<style lang="less" scoped>
@import '../assets/styles/global.less';
.icon-apron {
  font-family: "IconApron" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
