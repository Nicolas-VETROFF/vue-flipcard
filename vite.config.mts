import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/index.ts'),
        path.resolve(__dirname, 'src/nuxt.ts')
      ],
      name: 'FlipCard',
      fileName: (format, entryName) => {
        if (entryName === 'nuxt') {
          return `nuxt.${format === 'cjs' ? 'cjs' : 'mjs'}`
        }
        return `v-flipcard.${format}.js`
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit'],
      output: { globals: { vue: 'Vue' }, exports: 'named' }
    }
  }
})
