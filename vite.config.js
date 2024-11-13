import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
      // dev specific config
    };
  } else {
    // command === 'build'
    return {
      plugins: [react()],
      base: '/backendless-tabs-jsx/',
      // build specific config
    };
  }
});