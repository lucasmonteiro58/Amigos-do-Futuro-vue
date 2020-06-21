<template>
  <section class="container dialogue-container">
    <div v-if="hasBackdrop" class="backdrop"></div>
    <div v-if="dialoguePass.canPass" :class="passPosition" class="button-pass">
      <Button
        v-if="dialoguePass.type === 'string'"
        :to="'/' + nextRoute"
        name="btn-pass"
      ></Button>
      <Button
        v-if="dialoguePass.type === 'function'"
        :on-click="goToNextStage"
        name="btn-pass"
      ></Button>
    </div>
    <div class="stage-content">
      <slot v-bind="currentState" name="stageContent"></slot>
    </div>
    <transition name="fade">
      <div
        v-if="!currentDialog.dialogHidden"
        class="dialogue-container dialogue-container__box"
      >
        <transition name="fade">
          <div
            v-if="currentType !== 'avatar'"
            class="dialogue-container__characters"
          >
            <transition-group name="fade" class="characters--transition">
              <div
                v-for="avatar in currentAvatars"
                :key="`${avatar}-holder`"
                :class="[avatar, { darker: darkedAvatars.includes(avatar) }]"
                class="dialogue-container__avatars"
              ></div>
            </transition-group>
          </div>
        </transition>
        <div class="dialogue-container__box">
          <div :key="getBoxSize" :class="getBoxSize" class="dialogue-box">
            <div v-if="currentType === 'avatar'" class="avatar-holder">
              <div class="avatar-mask avatar-mask__position">
                <div
                  v-for="avatar in currentAvatars"
                  :key="`${avatar}-holder`"
                  :class="avatar"
                  class="avatar"
                ></div>
              </div>
            </div>
            <div
              :class="{ inverted: currentDialog.inverted }"
              class="avatar-name avatar-name__position"
            >
              {{ currentAvatarName }}
            </div>
            <transition name="fade">
              <div
                :key="index"
                v-html="currentDialogText"
                class="text dialogue-avatar-text__position"
              ></div>
            </transition>
            <div
              id="arrow-container"
              class="arrow-container arrow-container__position"
            >
              <div
                :class="{ disabled: isFirst }"
                @click="() => !isFirst && goPrev()"
                class="arrow btn-prev"
              ></div>
              <div @click="goNext" class="arrow btn-next"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="currentType === 'background'" class="mini-arrows">
      <div id="mini-arrows" class="arrow-container mini-arrows__position">
        <div
          :class="{ disabled: isFirst }"
          @click="() => !isFirst && goPrev()"
          class="arrow btn-prev"
        ></div>
        <div @click="goNext" class="arrow btn-next"></div>
      </div>
    </div>
    <div class="speech">
      <audio v-if="sound" :src="currentAudio" autoplay></audio>
    </div>
  </section>
</template>
<script>
import { fade, fadeOut, toBottom } from '@/assets/animate'

export default {
  props: {
    dialogueType: {
      type: String,
      required: true,
      validator(value) {
        return ['mono', 'duo', 'avatar', 'background'].includes(value)
      }
    },
    avatars: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    animation: {
      type: Function,
      required: false,
      default: () => false
    },
    nextRoute: {
      type: [String, Function],
      required: false,
      default: () => ''
    },
    hasBackdrop: {
      type: Boolean,
      required: false,
      default: false
    },
    dialogs: {
      type: Array,
      required: true
    },
    passPosition: {
      type: String,
      required: false,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  data() {
    return {
      index: 0,
      dialogues: [],
      dialogueAvatars: [],
      dialogueBackground: [],
      currentBackground: '',
      currentAvatarName: '',
      modelObject: {}
    }
  },
  computed: {
    sound() {
      return this.$store.state.sound && !!this.currentDialog.audio
    },
    currentAudio() {
      // return require('@/assets/audios/' + this.currentDialog.audio)
      return null
    },
    dialoguePass() {
      return {
        type: typeof this.nextRoute,
        canPass:
          typeof this.nextRoute === 'function' ||
          (typeof this.nextRoute === 'string' && this.nextRoute.length > 0)
      }
    },
    isFirst() {
      return this.index === 0
    },
    isLast() {
      return this.index === this.dialogues.length - 1
    },
    currentState() {
      return {
        index: this.index,
        currentDialog: this.currentDialog,
        goPrev: this.goPrev,
        goNext: this.goNext
      }
    },
    currentType() {
      return this.dialogueAvatars.length > 1
        ? 'duo'
        : this.currentDialog.dialogueType
    },
    currentAvatars() {
      if (this.currentType === 'duo')
        return [...this.dialogueAvatars.slice(0, 2)]
      else return [this.dialogueAvatars[0]]
    },
    currentDialog() {
      return this.dialogues[this.index]
    },
    currentDialogText() {
      return this.dialogues[this.index].text
    },
    getBoxSize() {
      const inverted = this.currentDialog.inverted ? '-inverted' : ''
      if (this.currentType === 'avatar') return 'box-dialogo-sm size-small'
      else return `box-dialogo-big${inverted} size-big`
    },
    darkedAvatars() {
      return [this.currentDialog.darkedAvatar] || []
    }
  },
  watch: {
    currentDialog(current) {
      if (current.dialogHidden) {
        if (current.timeoutPass !== undefined && current.timeoutPass > 0)
          setTimeout(() => this.goNext(), current.timeoutPass)
      }
    }
  },
  created() {
    this.currentAvatarName = this.name

    this.modelObject = {
      dialogueType: this.dialogueType,
      avatars: this.avatars,
      name: this.name,
      background: this.$store.state.currentBackground,
      hasBackdrop: this.hasBackdrop
    }

    const requiredArg = [
      'name',
      'avatars',
      'dialogueType',
      'background',
      'hasBackdrop'
    ]
    this.dialogues = this.mapDialogs(this.dialogs, requiredArg)
    this.dialogueAvatars = this.avatars
    this.replaceUserName(this.dialogues)
    this.checkChanges()
  },
  mounted() {
    if (this.dialoguePass.canPass) this.positionPassBtn()
  },
  methods: {
    positionPassBtn() {
      const passContainer = document.querySelector('.button-pass')
      if (this.passPosition === 'right') {
        passContainer.style.right = `20px`
      } else {
        const btnsContainer = document.querySelector('.button-container')
        passContainer.style.left = `${btnsContainer.offsetWidth}px`
      }
    },

    goPrev() {
      let numberBack = -1
      if (this.index - 1 > 0 && this.dialogues[this.index - 1].dialogHidden)
        numberBack = -2
      this.iterateDialogue(numberBack)
    },
    goNext() {
      if (this.isLast) this.goToNextStage()
      else this.iterateDialogue(1)
    },

    iterateDialogue(num) {
      this.index += num
      this.checkChanges()
    },

    goToNextStage() {
      if (typeof this.dialoguePass.type === 'string') {
        if (this.nextRoute.length > 0) this.$router.push(`/${this.nextRoute}`)
        else {
          this.exitAnimation()
        }
      } else {
        this.nextRoute()
      }
    },

    mapDialogs(modelArr, required) {
      const arr = JSON.parse(JSON.stringify(modelArr))
      for (const el of arr) {
        const objKeys = Object.keys(el)
        const index = arr.indexOf(el)
        const missingArg = []
        const filledObj = {}

        required.forEach((r) => {
          if (!objKeys.includes(r)) missingArg.push(r)
        })

        if (index > 0) {
          const previousEl = arr[index - 1]
          missingArg.forEach((arg) => (filledObj[arg] = previousEl[arg]))
        } else {
          const previousEl = this.modelObject
          missingArg.forEach((arg) => (filledObj[arg] = previousEl[arg]))
        }
        arr[index] = { ...el, ...filledObj }
      }
      return arr
    },

    replaceUserName(dialogue) {
      dialogue.forEach((speech) => {
        if (speech.text) {
          speech.text = speech.text.replace(
            /\$username_/gi,
            this.$store.state.user.name
          )
        }
      })
    },

    checkChanges() {
      if (
        this.currentDialog.background &&
        this.currentDialog.background !== this.currentBackground
      ) {
        this.currentBackground = this.currentDialog.background
        this.$store.commit('changeBackground', this.currentBackground)
      }
      if (
        this.currentDialog.name &&
        this.currentAvatarName !== this.currentDialog.name
      )
        this.currentAvatarName = this.currentDialog.name
      if (this.currentDialog.avatars && this.currentDialog.avatars.length > 0)
        this.dialogueAvatars = this.currentDialog.avatars
    },
    exitAnimation() {
      toBottom('.dialogue-box')
      fade('.stage-content', 0, 'easeOutSine', () => false, 400)
      fadeOut(
        ['.backdrop', '.button-pass', '.dialogue-container__characters'],
        () => this.$emit('close')
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

.stage-content {
  @include fill-and-center;
}

.backdrop {
  z-index: 48;
}

.mini-arrows {
  position: absolute;
  bottom: $canvas-padding-double;
  right: $canvas-padding-double;
  .arrow-container {
    @include flex-center;

    .arrow {
      margin: 0 5px;
      &:not(.disabled):hover {
        @include button_glow;
      }

      &.disabled {
        filter: grayscale(80%) brightness(50%);
      }
    }
  }
}

.dialogue-container {
  @include fill-and-center;
  flex-direction: column;

  &__box {
    z-index: 50;
  }

  .button-pass {
    position: absolute;
    @include flex-center;
    padding-left: $canvas-padding-double;
    top: $canvas-padding-double;
    z-index: 99;

    .btn {
      margin: 20px;
    }
  }

  .dialogue-container__characters {
    width: 90%;
    transition: all 0.2s ease-out;

    .characters--transition {
      width: 100%;
      @include flex-around;
    }

    .dialogue-container__avatars {
      transition: all 0.2s ease-out;
      transform: scale(1);

      &.darker {
        filter: brightness(0.4);
        transform: scale(0.95);
      }
    }
  }

  .dialogue-container__box {
    position: absolute;
    bottom: 0;

    .avatar-mask {
      z-index: 12;
      clip-path: polygon(100% 0, 100% 93%, 0 93%, 0 0);
      overflow: hidden;
      @include flex-center();
      align-items: flex-start;

      div {
        position: absolute;
      }
    }

    .text {
      font-size: 24px;
      height: 100%;
      width: 100%;
      transition: all 0.1s ease-in;
    }

    .avatar-name {
      color: $title-white;
      text-align: center;
      min-width: 200px;
    }

    .arrow-container {
      @include flex-center;

      .arrow {
        &:not(.disabled):hover {
          @include button_glow;
        }

        &.disabled {
          filter: grayscale(80%) brightness(50%);
        }
      }
    }
  }
}
</style>
