import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [checker({ typescript:true }), react()],
})
