<template>
  <div class="stage-container">
    <div class="background">
      <transition-group
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        name="staggered-fade"
        tag="ul"
      >
        <div
          v-for="image in filteredImages"
          :key="image.name"
          :class="image.src"
          class="background-image"
        ></div>
      </transition-group>
    </div>
    <slot />
  </div>
</template>
<script>
import { backgrounds } from '@/consts/index'
import { fadeIn, fadeOut } from '@/assets/animate'

export default {
  props: {
    background: {
      type: String,
      required: true,
      default: 'bg-1'
    }
  },
  data() {
    return {
      images: []
    }
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => image.name === this.background)
    }
  },
  created() {
    for (let i = 0; i < backgrounds.length; i++)
      this.images.push({ name: `bg-${i + 1}`, src: backgrounds[i] })
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      fadeIn(el, done)
    },
    leave(el, done) {
      fadeOut(el, done)
    }
  }
}
</script>
<style lang="scss" scoped>
.stage-container {
  @include flex-center;

  .background {
    position: absolute;
    top: 0;
    width: $canvas-width;
    height: $canvas-height;

    .background-image {
      position: absolute;
      top: 0;
    }
  }
}
</style>
