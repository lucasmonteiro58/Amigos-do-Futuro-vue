<template>
  <section class="form-container">
    <div class="left-container"></div>
    <div class="right-container"></div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  }
}
</script>
<style lang="scss" scoped>
.form-container {
  @include flex-center;
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
