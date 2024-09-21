import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_PUBLIC_KEY":JSON.stringify(process.env.VITE_PUBLIC_KEY),
    "process.env.VITE_SERVER_ID":JSON.stringify(process.env.VITE_SERVER_ID),
    "process.env.VITE_TEMPLATE_ID":JSON.stringify(process.env.VITE_TEMPLATE_ID),
  },
});
