<template>
  <div class="congrats-stage">
    <div class="shine Brilho"></div>
    <div class="sticker-stage">
      <div :class="stickers[step]" class="sticker"></div>
    </div>
    <div class="img-congrats parabens"></div>
    <div @click="goPrev" class="btn prev"></div>
    <div @click="goNext" class="btn next"></div>
  </div>
</template>
<script>
export default {
  props: {
    stickers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      step: 0
    }
  },
  computed: {
    actualSticker(stickers) {
      return stickers[0]
    }
  },
  methods: {
    goNext() {
      this.step += 1
      if (this.step >= this.stickers.length) {
        this.step = 0
      }
    },
    goPrev() {
      this.step -= 1
      if (this.step < 0) {
        this.step = this.stickers.length - 1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.congrats-stage {
  @include flex-center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: ($canvas-width / 2) - (500px / 2);
  width: 500px;
  height: 400px;
  z-index: 99;
}

.shine {
  position: absolute;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.img-congrats {
  position: absolute;
  top: 0px;
}

.prev {
  position: absolute;
  left: 40px;

  &:hover {
    @include button-glow();
  }

  &:active {
    filter: none;
  }
}

.next {
  position: absolute;
  right: 40px;

  &:hover {
    @include button-glow();
  }

  &:active {
    filter: none;
  }
}

.sticker-stage {
  position: absolute;
  width: 200px;
  height: 200px;
  @include flex-center;
}
</style>
