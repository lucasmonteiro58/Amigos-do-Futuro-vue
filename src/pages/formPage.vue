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
    <div class="right-container"></div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  },
  methods: {
    ready() {
      this.$refs.robozin.play()
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
}

.right-container {
  width: 60%;
  height: 100%;
  background-color: #305782;
}
</style>
