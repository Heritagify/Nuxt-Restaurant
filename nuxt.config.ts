// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts', '@nuxt/image'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    domains: ['your-external-image-source.com'], // If using external images
  },
  sitemap: {
    hostname: `https://bakery-phi-sepia.vercel.app`,
    gzip: true,
  },
})