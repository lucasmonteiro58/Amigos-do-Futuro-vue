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
      <div class="balloon-comment">
        <p v-html="textBallon"></p>
        <Button
          :on-click="playRobozin"
          class="btn-toggle-repeat"
          name="btn-toggle-repeat"
        ></Button>
      </div>
      <div class="box-regions-left"><p v-html="actualRegion.info"></p></div>
      <div :class="imageRegion" class="image-region"></div>
      <Button class="btn-toggle-next" name="btn-toggle-next"></Button>
    </div>
  </section>
</template>
<script>
import { robozinInteiro } from '../consts'
import { regions } from '../consts/infoRegionPage'

export default {
  data() {
    return {
      robozinInteiro,
      robozinIsPlay: false,
      regions,
      city: this.$store.state.userStatus.city || 'Fortaleza',
      textRegion:
        'Você sabia que o Ceará é dividido em 14 regiões e a sua cidade fica #region?'
    }
  },
  computed: {
    actualRegion() {
      return this.getActualRegion(this.city)
    },
    textBallon() {
      return this.textRegion.replace(
        '#region',
        `${this.actualRegion.artigo} <span class="green-text">${this.actualRegion.name}</span>`
      )
    },
    imageRegion() {
      return 'pc_' + this.actualRegion.id
    }
  },
  created() {
    this.city = this.$store.state.userStatus.city
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
    this.$store.commit('changeUserRegion', this.actualRegion)
    this.playRobozin()
  },
  methods: {
    playRobozin() {
      this.$refs.robozinInteiro.play()
    },
    getActualRegion(city) {
      for (const r in this.regions) {
        const cities = this.regions[r].cities
        for (const c in cities) {
          if (city === cities[c]) {
            return this.regions[r]
          }
        }
      }
      return null
    }
  }
}
</script>
<style lang="scss" scoped>
.info-region {
  background-color: $green-app;
  width: 1920px;
  height: 1080px;
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
  @include flex-center;
  padding: 14px 73px 168px 74px;

  .btn-toggle-repeat {
    position: absolute;
    transform: scale(0.45);
    top: 153px;
    right: -16px;
  }
  p {
    font-size: 52px;
    line-height: 52px;
    font-family: exo-bold;
    text-align: left;
  }
}

.image-region {
  position: absolute;
  right: 265px;
  top: 477px;
  transform: scale(1.65);
}

.box-regions-left {
  position: absolute;
  top: 526px;
  right: 626px;

  p {
    font-size: 30px;
    text-align: center;
    padding-right: 20px;
    padding-top: 10px;
    br {
      margin-top: -10px;
    }
  }
}
.robozin-inteiro {
  position: absolute;
  top: -120px;
  left: -20px;
}

.btn-toggle-next {
  position: absolute;
  right: -38px;
  top: 471px;
  transform: scale(0.9);
}
</style>
