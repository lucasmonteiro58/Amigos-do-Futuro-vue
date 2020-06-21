// HOLDERS
import PopUp from '@/components/holders/PopUp.vue'
import StageContainer from '@/components/holders/StageContainer.vue'
import AsyncImage from '@/components/holders/AsyncImage.vue'
import BackdropTutorial from '@/components/holders/BackdropTutorial.vue'

// INTERACTIVES
import Drag from '@/components/interact/Drag.vue'
import Drop from '@/components/interact/Drop.vue'
import Button from '@/components/interact/Button.vue'
// FEEDBACK
import Dialogue from '@/components/feedback/Dialogue.vue'
import Congrats from '@/components/feedback/Congrats.vue'

// Loading Screen
import LoadingScreen from '@/components/LoadingScreen.vue'

const Components = {
  install: (Vue) => {
    // LAYOUT
    Vue.component('PopUp', PopUp)
    Vue.component('StageContainer', StageContainer)
    Vue.component('AsyncImage', AsyncImage)
    Vue.component('BackdropTutorial', BackdropTutorial)
    Vue.component('Drag', Drag)
    Vue.component('Drop', Drop)
    Vue.component('Button', Button)
    Vue.component('Dialogue', Dialogue)
    Vue.component('Congrats', Congrats)
    Vue.component('LoadingScreen', LoadingScreen)
  }
}

export default Components
