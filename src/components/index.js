import LoadingScreen from '@/components/LoadingScreen.vue'
import Button from '@/components/interact/Button.vue'
import Animation from '@/components/Animation.vue'

const Components = {
  install: (Vue) => {
    Vue.component('LoadingScreen', LoadingScreen)
    Vue.component('Button', Button)
    Vue.component('Animation', Animation)
  }
}

export default Components
