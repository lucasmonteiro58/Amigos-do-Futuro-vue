<template>
  <div class="drag-wrap">
    <div
      :class="classname"
      :data-transfer="dataTransfer"
      class="slot drag-el"
      draggable="false"
    >
      <slot />
    </div>
  </div>
</template>
<script>
import interact from 'interactjs'

export default {
  props: {
    dataTransfer: {
      type: [Object, String],
      required: true
    },
    dropped: {
      type: Boolean,
      required: false,
      default: false
    },
    classname: {
      type: [String, Array],
      required: false,
      default: 'idle'
    },
    onendEvent: {
      type: Function,
      required: false,
      default() {
        return undefined
      }
    },
    onstartEvent: {
      type: Function,
      required: false,
      default() {
        return undefined
      }
    },
    isSigmoid: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      dragging: false,
      initialSnapTarget: {
        targets: [{ x: 0, y: 0, range: Infinity }],
        relativePoints: [{ x: 0, y: 0 }],
        enabled: true,
        endOnly: true,
        offset: 'self'
      },
      sigmoidInterval: '',
      rotation: 0,
      translation: ''
    }
  },
  mounted() {
    const snap = this.initialSnapTarget
    interact(this.$el.firstChild).draggable({
      snap,
      inertia: {
        allowResume: false
      },
      onmove: (event) => this.onMove(event),
      onstart: (event) => this.onStart(event),
      onend: (event) => this.onEnd(event)
    })
  },
  methods: {
    onMove(event) {
      if (this.sigmoidInterval !== '') clearInterval(this.sigmoidInterval)
      const target = event.target
      const initialX = parseFloat(target.getAttribute('data-x')) || 0
      const initialY = parseFloat(target.getAttribute('data-y')) || 0
      const newX = initialX + event.dx
      const newY = initialY + event.dy
      this.translation = target.style.transform = `translate(${newX}px, ${newY}px)`

      target.style.transition = '0s'
      this.rotate(event.dx, target, this.translation)
      this.sigmoidInterval = setInterval(
        () => this.rotate(0, target, this.translation),
        1000 / 60
      )

      target.setAttribute('data-x', newX)
      target.setAttribute('data-y', newY)
    },
    onStart(event) {
      const rect = interact.getElementRect(event.target)
      const startX = rect.left + rect.width / 2
      const startY = rect.top + rect.height / 2
      event.target.setAttribute('data-start-x', startX)
      event.target.setAttribute('data-start-y', startY)
      this.onstartEvent(this.dataTransfer)
    },
    onEnd(event) {
      if (this.sigmoidInterval !== '') clearInterval(this.sigmoidInterval)
      event.target.style.transition = '0.1s'
      event.target.style.transform = this.translation + ' rotate(0deg)'
      this.onendEvent(this.dataTransfer)
    },
    sigmoid(x) {
      return x / (1 + Math.abs(x))
    },
    rotate(x, target, translation) {
      if (this.isSigmoid) {
        this.rotation = this.rotation * 0.9 + this.sigmoid(x) * 2
        target.style.transform = translation + `rotate(${this.rotation}deg)`
        if (Math.abs(this.rotation) < 0.01) this.rotation = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
[draggable='false'] > * {
  pointer-events: none;
}

.slot {
  z-index: 100;
  touch-action: none;
}

.drag-wrap {
  @include flex-center;
  position: absolute;
  z-index: 10000;
}

.empty-space {
  position: absolute;
  z-index: 10;
}
</style>
