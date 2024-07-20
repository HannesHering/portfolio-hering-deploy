// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxtjs/i18n",
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: 'de',
    strategy: "prefix",
    locales: [
      {
        code: "de",
        name: "German",
        file: "de-DE.json"
      },
      {
        code: "en",
        name: "English",
        file: "en-US.json"
      }
    ]
  },
  app: {
    head: {
      title: 'Hering - Portfolio',
      htmlAttrs: {
        lang: 'de'
      }
    }
  }
})