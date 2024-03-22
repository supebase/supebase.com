// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  supabase: {
    url: "https://app.ymjt.com.cn",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzEwNzc3NjAwLAogICJleHAiOiAxODY4NTQ0MDAwCn0.SdlUIRWAWWt3Utd8XindS5-veuC2IHLmRtd56jb-RXE",
    redirect: false,
  },
  css: ["@/assets/app.css"],
  ui: {
    icons: ["ri", "lucide", "line-md"],
  },
  app: {
    keepalive: true,
    head: {
      viewport:
        "width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover",
      bodyAttrs: {
        class: "overflow-x-hidden",
      },
      meta: [
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      appName: "分享互联网",
      appAuthor: "Eric",
      userAgentApi:
        "https://token.ip.api.useragentinfo.com/json?token=ab28a017dc0b7536f452fd951aed51d2",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    defaultLocale: "zhCN",
  },
});
