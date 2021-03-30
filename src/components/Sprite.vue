<template lang="html">
  <div class="vue-sprite">
    <canvas
      ref="vue-sprite-canvas"
      :id="id"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'VSprite',
  props: {
    spritesheet: {
      required: true,
      type: String,
      default: ''
    },
    json: {
      required: true,
      type: Object
    },
    fps: {
      type: Number,
      default: 30
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    yoyo: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'vue-sprite'
    },
    isLoop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      frames: [],
      visible: true,
      length: 0,
      frameIndex: 0,
      currentIndex: 0,
      animationFrameID: null,
      yoyodirection: 0,
      sprite: null,
      ctx: null,
      height: 0,
      width: 0,
      now: 0,
      then: 0,
      lower: 0,
      upper: undefined
    }
  },
  mounted() {
    this.json.frames.forEach((frame) => {
      this.frames.push({
        name: frame.filename,
        x: frame.frame.x,
        y: frame.frame.y,
        w: frame.frame.w,
        h: frame.frame.h
      })
    })
    this.frames.sort((a, b) => a.filename < b.filename)
    this.width = this.frames[0].w
    this.height = this.frames[0].h
    this.length = this.frames.length - 1

    // definindo
    this.upper = this.frames.length
  },
  created() {
    this.$nextTick(() => {
      this.sprite = new Image()
      this.sprite.src = this.spritesheet
      this.sprite.onload = ({ target }) => {
        this.init(target)
      }
    })
  },
  methods: {
    init(img) {
      this.ctx = this.$refs['vue-sprite-canvas'].getContext('2d')
      this.autoplay && this.play()
    },
    render() {
      this.ctx && this.ctx.clearRect(0, 0, this.width, this.height)
      if (
        this.yoyo &&
        this.currentIndex % this.length === 0 &&
        this.currentIndex
      ) {
        this.yoyodirection = Number(!this.yoyodirection)
      }
      const index = Math.abs(
        (this.currentIndex % this.length) - this.length * this.yoyodirection
      )
      const x = this.frames[index].x
      const y = this.frames[index].y
      this.ctx &&
        this.ctx.drawImage(
          this.sprite,
          x,
          y,
          this.width,
          this.height,
          0,
          0,
          this.width,
          this.height
        )
    },
    loop() {
      this.now = Date.now()
      const delta = this.now - this.then
      if (delta > 1000 / this.fps) {
        this.then = this.now - (delta % (1000 / this.fps))
        this.render()
        this.currentIndex++
      }

      if (this.currentIndex < this.upper) {
        this.animationFrameID = window.requestAnimationFrame(this.loop)
      } else {
        this.$emit('animationOver', this.currentIndex)
        this.stop()
        if (this.isLoop) {
          this.play(this.lower, this.upper)
        }
      }
    },
    stop() {
      window.cancelAnimationFrame(this.animationFrameID)
      this.currentIndex = this.lower
    },
    play(from, to) {
      if (!from) {
        this.lower = 0
      }

      if (!to) {
        this.upper = this.frames.length
      }

      this.$emit('animationStart', this.currentIndex)
      this.currentIndex = Number.isNaN(Number(from)) ? this.currentIndex : from
      this.lower = Number.isNaN(Number(from)) ? this.lower : from
      this.upper = Number.isNaN(Number(to)) ? this.upper : to
      this.loop()
    }
  }
}
</script>

<style></style>
