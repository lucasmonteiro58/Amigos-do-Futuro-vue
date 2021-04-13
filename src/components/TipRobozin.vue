<template>
  <div class="tip-robozin">
    <div class="backdrop"></div>
    <div class="box-robot-help">
      <Robozin
        ref="robozinAzul"
        :start="robozinIsPlay"
        :robozin="robozinAzul"
        :time="3000"
        :frame-init="16"
        :frame-end="35"
        class="robozin-azul"
      ></Robozin>
    </div>
  </div>
</template>
<script>
import { robozinAzul } from '../consts/index'
export default {
  data() {
    return {
      robozinAzul,
      robozinIsPlay: false
    }
  },
  methods: {
    playRobozin() {
      this.$refs.robozinAzul.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.tip-robozin {
  position: absolute;
  width: 100%;
  height: 100%;
  @include flex-center;
  z-index: 300;
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000007e;
}

.box-robot-help {
  position: absolute;
  bottom: 50px;
  left: 30px;
}

.robozin-azul {
  position: absolute;
  top: -278px;
  left: -229px;
  transform: scale(0.38);
}
</style>
