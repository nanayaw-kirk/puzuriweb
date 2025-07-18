  export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('appName', 'Puzuri')
    nuxtApp.provide('group', 'Puzuri Group')
    nuxtApp.provide('groupLtd', 'Puzuri Group of Companies')


    nuxtApp.provide('agro', 'Puzuri Agro')
    nuxtApp.provide('agroLtd', 'Puzuri Agro Limited')


    nuxtApp.provide('log', 'Puzuri Logistics')
    nuxtApp.provide('logLtd', 'Puzuri Logistics Limited')



    nuxtApp.provide('const', 'Puzuri Construction')
    nuxtApp.provide('constLtd', 'Puzuri Construction Limited')



  })