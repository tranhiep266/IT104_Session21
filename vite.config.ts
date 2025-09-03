import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwind()],
})