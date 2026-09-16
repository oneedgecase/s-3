import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  envPrefix: ['VITE_', 'APP_'],
  define: {
    'import.meta.env.VITE_APP_ACCESS_TOKEN': JSON.stringify(
      process.env.APP_ACCESS_TOKEN
    )
  }
})
