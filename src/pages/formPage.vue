<template>
  <section class="form-container">
    <div class="left-container">
      <Animation
        ref="robozin"
        :id="'robozin-laranja'"
        :json="require('../assets/animations/robozin/robozin-laranja.json')"
        :autoplay="true"
        :loop="true"
        :fps="10"
        :ready="ready"
        :spritesheet="
          require('../assets/animations/robozin/robozin-laranja.png')
        "
        class="robozin-laranja"
      ></Animation>
    </div>
    <div class="right-container">
      <div class="robot-balloon">
        <span>{{ asks[index].title }}</span>
      </div>
      <div v-if="index === 0" class="form">
        <div class="buttons-section">
          <Button
            :content="asks[index].options[0]"
            :on-click="clickBoy"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
          <Button
            :content="asks[index].options[1]"
            :on-click="clickGirl"
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
        <input
          v-model="userCity"
          type="text"
          class="input-box"
          placeholder="Digite sua cidade"
        />
        <div class="buttons-section">
          <Button
            :on-click="clickSend"
            :content="'Enviar'"
            class="btn-form"
            name="btn-action-orange"
          ></Button>
        </div>
      </div>
      <!-- <input type="text" class="input-box" placeholder="Escreva seu nome" /> -->
    </div>
  </section>
</template>
<script>
import { asks } from '../consts/formPage'
export default {
  data() {
    return {
      index: 0,
      asks,
      userName: '',
      userAge: '',
      userCity: '',
      userSex: ''
    }
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  },
  methods: {
    ready() {
      this.$refs.robozin.play()
    },
    clickBoy() {
      this.userSex = 'boy'
      this.index++
    },
    clickGirl() {
      this.userSex = 'girl'
      this.index++
    },
    clickName() {
      this.index++
    },
    clickAge() {
      this.index++
    },
    clickSend() {}
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
</style>
