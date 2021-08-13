<template>
  <fragment>
    <div v-if="tipShowed" class="tip-robozin">
      <div class="backdrop"></div>
      <div class="box-robot-help">
        <Robozin
          ref="robozinAzul"
          :start="robozinIsPlay"
          :robozin="robozinAzul"
          :time="audioTime"
          :frame-init="16"
          :frame-end="35"
          class="robozin-azul"
        ></Robozin>
        <div class="content">
          <div class="title">{{ tipTitle }}</div>
          <div class="subtitle">{{ tipInfo }}</div>
          <Button
            :on-click="closeTip"
            name="btn-toggle-close"
            class="close-button"
          ></Button>
        </div>
      </div>
    </div>
    <div v-else @click="openTip" class="robot-mini-blue icon-robot"></div>
  </fragment>
</template>
<script>
import { robozinAzul } from '../consts/index'
export default {
  props: {
    tipTitle: {
      type: String,
      default: 'Descobrindo o Ceará'
    },
    tipInfo: {
      type: String,
      default: 'Title Info lorem inputs ash ajh asd sa dfsfuiwqjewqe '
    },
    audioTime: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      robozinAzul,
      robozinIsPlay: false,
      tipShowed: false
    }
  },
  methods: {
    playRobozin() {
      this.$refs.robozinAzul.play()
    },
    closeTip() {
      this.tipShowed = false
    },
    openTip() {
      this.tipShowed = true
    }
  }
}
</script>
<style lang="scss" scoped>
.tip-robozin {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 300;
}

.icon-robot {
  @include cursor-click;
  position: absolute;
  left: 20px;
  bottom: 20px;
  transform: scale(0.7);

  &:hover {
    transform: scale(0.72);
  }
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

.content {
  width: 524px;
  height: 209px;
  position: relative;
  left: 325px;
  top: 140px;

  .title {
    @include bungee;
    color: $blue;
    font-size: 2rem;
  }

  .subtitle {
    padding-top: 10px;
    @include exo-bold;
    color: $text-color;
    font-size: 1.5rem;
    line-height: 1;
  }

  .close-button {
    position: absolute;
    transform: scale(0.5);
    top: -118px;
    right: -140px;
  }
}
</style>
