import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/exerciseFrontend/FrontendMentor/dictionary-web-app/dictionary-web-app/",
  plugins: [react()],
})
