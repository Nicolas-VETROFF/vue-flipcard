import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => outputChunk.fileName.endsWith('.js'),
    }),
    dts({
      include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.vue'],
      outDir: 'dist',
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
      entry: {
        'main': path.resolve(__dirname, 'src/index.ts'),
        'module': path.resolve(__dirname, 'src/module.ts'),
        'v-flipcard': path.resolve(__dirname, 'src/components/VFlipCard.vue'),
      },
      name: 'VFlipCard',
      fileName: (format, entryName) => {
        const prefix = entryName
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
