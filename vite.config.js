import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path'; // Import de resolve depuis path

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
        dashboardEtudiant: resolve(__dirname, 'src/pages/dashboardEtudiant.html'),
        submitSubject: resolve(__dirname, 'src/pages/submitSubject.html'),
        dashboardAdmin: resolve(__dirname, 'src/pages/admin/dashboardAdmin.html'),
      },
    },
  },
});