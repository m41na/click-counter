import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ["**/node_modules/**", "./server/**"],
    globals: true,
    environment: "jsdom",
  },
})
