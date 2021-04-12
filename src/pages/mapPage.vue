<template>
  <section class="map-container">
    <Drag
      v-for="el in dragRegions"
      :key="el.name"
      :dataTransfer="el.name"
      :style="{ top: el.top, left: el.left }"
    >
      <div :class="el.image"></div>
    </Drag>
  </section>
</template>
<script>
import Drag from '../components/interact/Drag.vue'

import { dragRegions } from '../consts/mapPage'
export default {
  components: { Drag },
  data() {
    return {
      dragRegions
    }
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-mapa-ceara')
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
}
</style>
