<template>
  <div class="image-loading">
    <img :src="source" draggable="false" />
  </div>
</template>
<script>
import { pop } from '@/assets/animate'

export default {
  props: {
    source: {
      type: String,
      required: true
    },
    callback: {
      type: Function,
      required: false,
      default() {
        return false
      }
    }
  },
  mounted() {
    this.loadImage(this.source, this.$el)
  },
  methods: {
    loadImage(src, el) {
      const image = new Image()
      image.onload = () => {
        pop(el)
        this.callback()
      }
      image.src = src
    }
  }
}
</script>
