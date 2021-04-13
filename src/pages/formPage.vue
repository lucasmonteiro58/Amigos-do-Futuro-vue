<template>
  <section class="form-container">
    <div class="left-container">
      <Robozin
        ref="robozinLaranja"
        :start="robozinIsPlay"
        :robozin="robozinLaranja"
        :time="3000"
        :frame-init="16"
        :frame-end="35"
        class="robozin-laranja"
      ></Robozin>
      <div class="buttons-section">
        <Button
          :is-disabled="index === 0"
          :on-click="prevBtn"
          name="btn-toggle-arrow-p"
        ></Button>
        <Button
          :is-disabled="index === 3"
          :on-click="nextBtn"
          name="btn-toggle-arrow"
        ></Button>
      </div>
    </div>
    <div class="right-container">
      <div class="robot-balloon">
        <span>{{ questionComputed }}</span>
      </div>
      <div v-if="index === 0" class="form">
        <div class="buttons-section">
          <Button
            :content="asks[index].options[0]"
            :on-click="clickBoy"
            :class="{ active: userGender !== 'boy' && userGender }"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
          <Button
            :content="asks[index].options[1]"
            :on-click="clickGirl"
            :class="{ active: userGender !== 'girl' && userGender }"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
        </div>
      </div>
      <div v-else-if="index === 1" class="form">
        <input
          v-model="userName"
          type="text"
          class="input-box"
          placeholder="Escreva seu nome"
        />
        <div class="buttons-section">
          <Button
            :on-click="clickName"
            :content="'Próximo'"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
        </div>
      </div>
      <div v-else-if="index === 2" class="form">
        <input
          v-model="userAge"
          type="number"
          min="0"
          oninput="this.value = Math.abs(this.value)"
          class="input-box"
          placeholder="Digite sua idade"
        />
        <div class="buttons-section">
          <Button
            :on-click="clickAge"
            :content="'Próximo'"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
        </div>
      </div>
      <div v-else-if="index === 3" class="form">
        <v-select
          v-model="userCity"
          :options="citys"
          class="style-chooser input-box"
          placeholder="Digite sua cidade"
        ></v-select>
        <div class="buttons-section">
          <Button
            :on-click="clickSend"
            :content="'Enviar'"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import { asks, citys } from '../consts/formPage'
import { robozinLaranja } from '../consts/index'
import popups from '../mixins/popups'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)

export default {
  mixins: [popups],
  data() {
    return {
      index: 0,
      asks,
      robozinLaranja,
      userName: this.$store.state.userStatus.userName || '',
      userAge: this.$store.state.userStatus.userAge || '',
      userCity: this.$store.state.userStatus.userCity || '',
      userGender: this.$store.state.userStatus.userGender || '',
      citys,
      isReady: false,
      robozinIsPlay: false
    }
  },
  computed: {
    questionComputed() {
      return asks[this.index].title.replace('#user', this.userName)
    }
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  },
  methods: {
    playRobozin() {
      this.$refs.robozinLaranja.play()
    },
    start() {
      this.playRobozin()
    },
    prevBtn() {
      this.index--
      this.start()
    },
    nextBtn() {
      switch (this.index) {
        case 0:
          if (this.userGender) {
            this.index++
            this.start() // iniciar animação
          } else {
            this.showPopUpError()
          }
          break
        case 1:
          if (this.userName) {
            this.index++
            this.start() // iniciar animação
          } else {
            this.showPopUpError()
          }
          break
        case 2:
          if (this.userAge) {
            this.index++
            this.start() // iniciar animação
          } else {
            this.showPopUpError()
          }
          break
        case 3:
          if (this.userCity) {
            this.index++
            this.start() // iniciar animação
          } else {
            this.showPopUpError()
          }
          break

        default:
          break
      }
    },
    clickBoy() {
      this.userGender = 'boy'
      this.index++
      this.$store.commit('changeUserGender', this.userGender)
      this.start()
    },
    clickGirl() {
      this.userGender = 'girl'
      this.index++
      this.$store.commit('changeUserGender', this.userGender)
      this.start()
    },
    clickName() {
      if (this.userName) {
        this.index++
        this.$store.commit('changeUserName', this.userName)
        this.start()
      } else {
        this.showPopUpError()
      }
    },
    clickAge() {
      if (this.userAge) {
        this.index++
        this.$store.commit('changeUserAge', this.userAge)
        this.start()
      } else {
        this.showPopUpError()
      }
    },
    clickSend() {
      if (this.userCity) {
        this.$store.commit('changeUserCity', this.userCity)
        console.log(this.$store.state.userStatus)
        this.$router.push('/region')
      } else {
        this.showPopUpError()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form-container {
  @include flex-center;
}

.robozin-laranja {
  position: absolute;
  top: -85px;
  transform: scale(0.8);
}

.left-container {
  width: 40%;
  height: 100%;
  background-color: white;

  .buttons-section {
    position: absolute;
    bottom: 100px;
    display: flex;
    gap: 50px;
    justify-content: center;
    width: 40%;
    transform: scale(0.6);
  }
}

.right-container {
  @include flex-center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: #305782;

  .robot-balloon {
    @include bungee;
    @include flex-center;
    color: #305882;
    font-size: 40px;
    padding-left: 52px;
    margin-bottom: 60px;
  }

  .form {
    .buttons-section {
      @include flex-center;
      gap: 40px;
      transform: scale(0.6);
    }

    .input-box {
      text-transform: capitalize;
      font-size: 40px;
      padding: 20px 75px;
      text-align: center;
      margin-bottom: 20px;

      &::placeholder {
        text-transform: initial;
      }
    }
  }
}
.btn-form {
  &.active {
    filter: opacity(0.4);
  }
}
</style>
