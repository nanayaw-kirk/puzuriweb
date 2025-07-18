import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  future : {
    compatibilityVersion: 4
  },

  devtools: { enabled: false },
  css: ['./app/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['shadcn-nuxt', '@vueuse/nuxt'],


  shadcn: {
    prefix: 'ui',
    componentDir: './app/components/ui'
  }
})