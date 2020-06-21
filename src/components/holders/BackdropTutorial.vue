<template>
  <div class="tutorial-container">
    <div v-if="hasBackdrop" class="backdrop"></div>
    <div class="tutorial-info">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    targets: {
      type: Array,
      required: true
    },
    timeoutPass: {
      type: Number,
      required: false,
      default: -1
    },
    hasBackdrop: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      elTargets: []
    }
  },
  mounted() {
    for (const target of this.targets) {
      const el = document.querySelector(target)
      const initialZIndex = el.style.zIndex
      el.style.zIndex = 50
      this.elTargets.push({ el, zIndex: initialZIndex })
    }
    if (this.timeoutPass > 0) {
      setTimeout(() => {
        this.$emit('next')
        for (const target of this.elTargets) {
          target.el.style.zIndex = target.zIndex
        }
      }, this.timeoutPass)
    }
  }
}
</script>
<style lang="scss" scoped>
.tutorial-info {
  z-index: 52;
  @include fill-and-center;
}
</style>
