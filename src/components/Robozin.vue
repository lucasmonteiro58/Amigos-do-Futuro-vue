<template>
  <div>
    <Sprite
      ref="robozinFalando"
      v-show="showFalando"
      :spritesheet="robozin.falandoSprite"
      :json="robozin.falandoJson"
      :fps="10"
      :autoplay="false"
      @animationOver="overFalando"
    ></Sprite>
    <Sprite
      ref="robozinParado"
      v-show="showParado"
      :spritesheet="robozin.falandoSprite"
      :json="robozin.falandoJson"
      :fps="10"
      :autoplay="false"
      @animationOver="overParado"
    ></Sprite>
  </div>
</template>

<script>
export default {
  name: 'TwoAnimation',
  props: {
    robozin: {
      type: Object,
      required: true
    },
    start: {
      type: Boolean,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    frameEnd: {
      type: Number,
      required: true
    },
    frameInit: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      showFalando: true,
      showParado: false,
      timeout: ''
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.play()
  },
  methods: {
    play() {
      clearTimeout(this.timeout)
      this.showFalando = true
      this.showParado = false
      this.$refs.robozinParado.stop()
      this.$refs.robozinFalando.play(2, 18)
    },
    overFalando() {
      this.$refs.robozinFalando.play(2, 18)
      this.timeout = setTimeout(() => {
        this.initParado()
      }, this.time)
    },
    initParado() {
      clearTimeout(this.timeout)
      // const frame = this.frameInit + 1
      this.showFalando = false
      this.showParado = true
      this.$refs.robozinFalando.stop()
      this.$refs.robozinParado.play(19, 38)
    },
    overParado() {
      // const frame = this.frameInit + 1
      clearTimeout(this.timeout)
      this.$refs.robozinParado.stop()
      this.$refs.robozinParado.play(21, 38)
    }
  }
}
</script>

<style lang="scss" scoped></style>
