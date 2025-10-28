import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// מחזיר base שונה לפי הסביבה
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : '/FullStackDeveloper/',
}))