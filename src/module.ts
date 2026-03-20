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

    // Auto-import du composant VFlipCard
    addComponent({
      name: 'VFlipCard',
      export: 'default',
      filePath: resolve('./v-flipcard.es.js')
    })
  }
})
