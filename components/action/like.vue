<template>
  <div
    class="flex items-center gap-1.5 font-medium font-mono text-slate-500 cursor-pointer"
    @click="store.like()">
    <transition
      :name="store.isLiked ? 'zoom' : ''"
      mode="out-in">
      <Icon
        class="h-[1.25rem] w-[1.25rem] text-red-500"
        name="ri:heart-2-fill"
        v-if="store.isLiked" />
      <Icon
        class="h-[1.25rem] w-[1.25rem]"
        name="ri:heart-2-line"
        v-else />
    </transition>
    <div class="h-[16px] overflow-y-hidden relative text-end">
      <transition-group :name="store.isLiked ? 'like' : 'unlike'">
        <div
          class="top-0 left-0 relative leading-[16px]"
          :key="store.likeCount">
          {{ store.likeCount }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
const store = useStore();
</script>
