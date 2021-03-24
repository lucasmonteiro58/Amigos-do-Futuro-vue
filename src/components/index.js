import LoadingScreen from '@/components/LoadingScreen.vue'
import Button from '@/components/interact/Button.vue'

const Components = {
  install: (Vue) => {
    Vue.component('LoadingScreen', LoadingScreen)
    Vue.component('Button', Button)
  }
}

export default Components
