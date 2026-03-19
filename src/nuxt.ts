import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@nv-dev/vue-flipcard',
    configKey: 'flipcard',
    compatibility: {
       nuxt: '^3.0.0'
    }
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Auto-import du composant VFlipCard avec le préfixe V
    addComponentsDir({
      path: resolve('./components'),
    })
  }
})
