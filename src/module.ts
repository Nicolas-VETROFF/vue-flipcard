import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@nv-dev/vue-flipcard',
    configKey: 'vFlipcard',
    compatibility: {
      nuxt: '^3.0.0 || ^4.0.0',
    }
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    // Auto-import du composant VFlipCard depuis main.es.js
    addComponent({
      name: 'VFlipCard',
      export: 'VFlipCard',
      filePath: resolve('./main.es.js')
    })
  }
})
