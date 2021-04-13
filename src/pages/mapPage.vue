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
    <Drop
      v-for="el in dropRegions"
      :key="el.image"
      :expected="el.name"
      :style="{ top: el.top, left: el.left }"
      @dropou="onDropPecas"
      class="drop-regions"
    >
      <div :class="el.image"></div>
    </Drop>
    <TipRobozin></TipRobozin>
  </section>
</template>
<script>
import Drag from '../components/interact/Drag.vue'
import Drop from '../components/interact/Drop.vue'

import { dragRegions, dropRegions } from '../consts/mapPage'
export default {
  components: { Drag, Drop },
  data() {
    return {
      dragRegions,
      dropRegions,
      pecasDropadas: 0
    }
  },
  mounted() {
    this.$store.commit('changeBackground', 'bg-mapa-ceara')
  },
  methods: {
    onDropPecas(event) {
      const item = event.relatedTarget
      const drop = event.target
      item.style.display = 'none'
      drop.style.opacity = '1'
      this.pecasDropadas++
      if (this.pecasDropadas === 7) {
        console.log('termunou')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
}

.drop-regions {
  position: absolute;
  opacity: 0;
}
</style>
