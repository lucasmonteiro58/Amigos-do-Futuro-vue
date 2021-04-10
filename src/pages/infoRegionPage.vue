<template>
  <section class="info-region">
    <div class="box-comment">
      <Robozin
        ref="robozinInteiro"
        :start="robozinIsPlay"
        :robozin="robozinInteiro"
        :time="3000"
        :frame-init="16"
        :frame-end="35"
        class="robozin-inteiro"
      ></Robozin>
      <div @click="playRobozin" class="balloon-comment"></div>
    </div>
  </section>
</template>
<script>
import { robozinInteiro } from '../consts'

export default {
  data() {
    return {
      robozinInteiro,
      robozinIsPlay: false
    }
  },
  mounted() {
    this.playRobozin()
  },
  methods: {
    playRobozin() {
      this.$refs.robozinInteiro.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.info-region {
  background-color: $green-app;
  .box-comment {
    position: relative;
    transform: scale(0.93);
  }
}
.balloon-comment {
  position: absolute;
  top: 50px;
  right: 70px;
  transform: scale(0.96);
}
.robozin-inteiro {
  position: absolute;
  top: -120px;
  left: -20px;
}
</style>
