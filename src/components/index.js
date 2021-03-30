import LoadingScreen from '@/components/LoadingScreen.vue'
import Button from '@/components/interact/Button.vue'
import Animation from '@/components/Animation.vue'
import Robozin from '@/components/Robozin.vue'
import Sprite from '@/components/Sprite.vue'

const Components = {
  install: (Vue) => {
    Vue.component('LoadingScreen', LoadingScreen)
    Vue.component('Button', Button)
    Vue.component('Animation', Animation)
    Vue.component('Robozin', Robozin)
    Vue.component('Sprite', Sprite)
  }
}

export default Components
