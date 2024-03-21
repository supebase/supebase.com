// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ["@nuxt/ui", "@nuxtjs/supabase", "@vueuse/nuxt"],
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
});
