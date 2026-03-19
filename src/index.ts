import VFlipCard from './components/VFlipCard.vue'
import type { App } from 'vue'

const install = (app: App) => {
  app.component('VFlipCard', VFlipCard)
}

export default { install }
export { VFlipCard }
