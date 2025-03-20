import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, '/index.html'),
            login: resolve(__dirname, 'src/pages/login.html'),
            register: resolve(__dirname, 'src/pages/register.html'),
            dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
            submitSubject: resolve(__dirname, 'src/pages/submitSubject.html'),
        },
    },
},

})