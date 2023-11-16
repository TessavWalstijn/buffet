// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/": { prerender: true },
    "/create": { ssr: false },
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  supabase: {
    redirect: false,
  },
});
