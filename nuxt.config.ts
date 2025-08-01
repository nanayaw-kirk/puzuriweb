import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  future : {
    compatibilityVersion: 4
  },

  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: process.env.GA,
        }
      }
    }
  },


  devtools: { enabled: false },
  css: ['./app/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/scripts'
  ],


  shadcn: {
    prefix: 'ui',
    componentDir: './app/components/ui'
  }
})