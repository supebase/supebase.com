import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "useStore",
  state: () => ({
    isAuth: false,

    likeCount: 0,
    isLiked: false,

    openDeleteModal: false,
  }),
  actions: {
    like() {
      this.isLiked = !this.isLiked;
      this.likeCount = this.isLiked ? this.likeCount + 1 : this.likeCount - 1;
    },
  },
});
