import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => outputChunk.fileName.includes('v-flipcard'),
    }),
  ],
  build: {
    lib: {
      entry: {
        'index': path.resolve(__dirname, 'src/index.ts'),
        'nuxt': path.resolve(__dirname, 'src/module.ts'),
      },
      name: 'FlipCard',
      fileName: (format, entryName) => {
        const prefix = entryName === 'index' ? 'v-flipcard' : 'nuxt'
        return `${prefix}.${format}.js`
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit', '@nuxt/schema', /^node:/],
      output: { globals: { vue: 'Vue' }, exports: 'named' }
    }
  }
})
