import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "useStore",
  state: () => ({
    isAuth: false,
  }),
  actions: {},
});
