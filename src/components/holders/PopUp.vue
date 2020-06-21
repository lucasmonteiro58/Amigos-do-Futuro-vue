<template>
  <section class="pop-up-wrapper">
    <div @click="closePopup" class="backdrop"></div>
    <div :class="classname" class="body">
      <slot />
    </div>
  </section>
</template>
<script>
import { fadeIn, fromTop } from '@/assets/animate'
export default {
  props: {
    classname: {
      type: String,
      required: false,
      default: 'pop-up'
    }
  },
  mounted() {
    fadeIn(this.$el.firstChild)
    fromTop(this.$el.lastChild)
  },
  methods: {
    closePopup() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.pop-up-wrapper {
  @include fill-and-center;

  .body {
    @include flex-center;
    // background: url('~@/assets/images/pop-up.png') no-repeat center center;
    // background-size: 878px 521px;
    // width: 878px;
    // height: 521px;
    flex-direction: column;
  }
}
</style>
