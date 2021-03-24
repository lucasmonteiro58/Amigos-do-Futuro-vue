<template>
  <section class="initial-page-container">
    <div class="logo-jogo"></div>
    <Button name="btn-start"></Button>
    <div class="counter">00000</div>
    <div class="legenda">
      Aqui é a quantidade de Amigos do Futuro que já passaram por aqui.
    </div>
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
.initial-page-container {
  @include flex-center;
  flex-direction: column;
}
.logo-jogo {
  transform: scale(0.9);
  margin-top: 20px;
}
.counter {
  margin-top: 60px;
  margin-bottom: 20px;
  @include norwester;
  text-align: center;
  padding-right: 6px;
  font-weight: bold;
  font-size: 85px;
}

.legenda {
  font-size: 22px;
}
</style>
