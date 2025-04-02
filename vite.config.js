import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path'; // Import de resolve depuis path

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Google Font
        openSans: ['Open Sans', 'sans-serif'], // Google Font
        ydSummer: ['YDSummerLight', 'sans-serif'], // Police locale
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        register: resolve(__dirname, 'src/pages/register.html'),
        dashboardEtudiant: resolve(__dirname, 'src/pages/dashboardEtudiant.html'),
        submitSubject: resolve(__dirname, 'src/pages/submitSubject.html'),
        dashboardAdmin: resolve(__dirname, 'src/pages/admin/dashboardAdmin.html'),
      },
    },
  },
});