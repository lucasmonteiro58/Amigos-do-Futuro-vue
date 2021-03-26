import LoadingScreen from '@/components/LoadingScreen.vue'
import Button from '@/components/interact/Button.vue'
import Animation from '@/components/Animation.vue'
import TwoAnimation from '@/components/TwoAnimation.vue'

const Components = {
  install: (Vue) => {
    Vue.component('LoadingScreen', LoadingScreen)
    Vue.component('Button', Button)
    Vue.component('Animation', Animation)
    Vue.component('TwoAnimation', TwoAnimation)
  }
}

export default Components
