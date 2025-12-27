import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

//changed stuff here
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  //added base and build here
  base: '/', // '/' si le site est à la racine de github.io
  build: {
    outDir: path.resolve(__dirname, '../docs') // <-- build ira directement dans docs à la racine
	emptyOutDir: true // clear the previous build
  }
  
})
