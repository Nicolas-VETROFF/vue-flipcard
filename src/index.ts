import FlipCard from './components/FlipCard.vue'
import type { App } from 'vue'

const install = (app: App) => {
  app.component('FlipCard', FlipCard)
}

export { FlipCard }
export default { install }
