export const useUserAgent = async () => {
  if (!localStorage.getItem("nuxt-user-ip")) {
    const config = useRuntimeConfig();

    const { data } = await useFetch<any>(config.public.userAgentApi);
    const userInfo = JSON.parse(data.value);

    localStorage.setItem("nuxt-user-ip", userInfo.ip);
    localStorage.setItem("nuxt-user-location", userInfo.province);
  }
};
