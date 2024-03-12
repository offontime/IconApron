<template>
  <svg class="svg-icon" aria-hidden="true" :style="{ width: size, height: size }">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ApIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    size: {
      type: Number,
      default: 16
    },
    name: {
      type: String,
      default: 'apron-design',
      required: true,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>

<style>
.svg-icon {
  fill: currentColor;
}
</style>