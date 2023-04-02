import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Keyword-Extractor-React-OpenAI-API-Chakra-UI/",
  plugins: [react()],
  ports: 3000,
});
