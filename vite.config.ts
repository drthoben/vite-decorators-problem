import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
        ],
        // parserOpts: {
        //   plugins: ['decorators-legacy'],
        // },
      },
    }),
  ],
});