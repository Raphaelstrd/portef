//https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-swiper',
    'vue3-carousel-nuxt',
  ],

  carousel: {
    prefix: 'MyPrefix'
  },

    swiper: {
    // Options spécifiques à Swiper
    prefix: 'Swiper', // Préfixe par défaut pour les composants Swiper
    styleLang: 'css', // Langue de style par défaut pour les styles Swiper
    modules: ['navigation', 'pagination'], // Modules Swiper à importer
    
  },
  


  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js','css','java','json','bash','vue']
    }
  }
})
