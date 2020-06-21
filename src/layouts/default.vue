<template>
  <div>
    <nuxt class="general" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.general {
  width: 1920px;
  height: 1080px;
  @include flex-center;
  background-image: linear-gradient(red, yellow);
}
</style>
