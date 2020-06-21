<template>
  <div>
    <div v-if="!isBig" class="fill"></div>
    <div class="dialog">
      <div
        class="dialog-box"
        :class="isBig ? 'btn-dialogo-big' : 'btn-dialogo-sm'"
      >
        <div class="name" :class="{ big: isBig }">
          <span>{{ name }}</span>
        </div>
        <transition-group name="fade">
          <div
            v-for="(dialog, index) in filteredDialogs"
            :id="index"
            :key="dialog.audio"
            class="dialogs"
            :class="{ big: isBig }"
            v-html="dialog.fala"
          ></div>
        </transition-group>
        <div class="controls-btn" :class="{ big: isBig }">
          <Button
            name="btn-prev"
            :class="{ disable: firstDialog }"
            :on-click="goPrev"
          ></Button>
          <Button name="btn-next" :on-click="goNext"></Button>
        </div>
      </div>
      <div v-if="isBig" class="avatar big">
        <div :class="avatar"></div>
      </div>
      <div v-else class="avatar mask">
        <div :class="avatar"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button'
export default {
  components: {
    Button
  },
  props: {
    isBig: {
      type: Boolean,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    dialogs: {
      type: Array,
      required: true
    },
    close: {
      type: Function,
      required: true,
      default() {
        console.log('give me a function!')
      }
    }
  },
  data() {
    return {
      step: 0
    }
  },
  computed: {
    filteredDialogs() {
      return [this.dialogs[this.step]]
    },
    firstDialog() {
      if (this.step === 0) {
        return true
      } else return false
    },
    lastDialog() {
      if (this.step === this.dialogs.length - 1) {
        return true
      } else return false
    }
  },
  methods: {
    goNext() {
      if (!this.lastDialog) {
        this.step += 1
      } else {
        this.close()
      }
    },
    goPrev() {
      if (!this.firstDialog) {
        this.step -= 1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog {
  @include fill-canvas();
  @include flex-center();

  .dialog-box {
    z-index: 10;
    align-self: flex-end;
    margin-bottom: 20px;
    position: relative;
  }
}

.name {
  @include name_dialog();
  @include flex-center();
  position: absolute;
  width: 220px;
  height: 55px;
  left: 18px;
  bottom: 34px;

  &.big {
    left: 67px;
    top: 8px;
  }
}

.avatar {
  overflow: hidden;
  position: absolute;
  align-self: flex-start;

  &.mask {
    z-index: 12;
    border-radius: 50%;
    width: 194px !important;
    height: 194px !important;
    overflow: hidden;
    clip-path: polygon(100% 0, 100% 93%, 0 93%, 0 0);
    position: absolute;
    bottom: 100px;
    left: 150px;
    @include flex-center();
    align-items: flex-start;

    div {
      position: absolute;
    }
  }

  &.big {
    z-index: 9;
  }
}

.dialogs {
  position: absolute;
  width: 68%;
  top: 30%;
  left: 26%;
  font-size: 25px;
  line-height: 28px;

  &.big {
    width: 85%;
    top: 39%;
    left: 7%;
  }
}

.controls-btn {
  display: flex;
  width: 102px;
  position: absolute;
  top: 60%;
  right: 6%;

  &.big {
    top: 72%;
    right: 10%;
  }

  .disable {
    filter: grayscale(100%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fill {
  @include fill-canvas();
  background-color: #000000a9;
}
</style>
