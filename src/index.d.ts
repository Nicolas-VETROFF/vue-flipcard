import { App } from 'vue'
import { DefineComponent } from 'vue'

// Déclaration du composant VFlipCard
export const VFlipCard: DefineComponent<
  {
    width?: string
    height?: string
    activeHover?: boolean
    activeClick?: boolean
    activeDrag?: boolean
    flipSide?: 'left' | 'right' | 'up' | 'down'
  },
  {},
  {},
  {
    front: () => any
    back: () => any
  }
>

// Déclaration du plugin
declare const plugin: {
  install(app: App): void
}

export default plugin
