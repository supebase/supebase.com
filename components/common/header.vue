<template>
  <div class="flex items-center justify-between h-16">
    <Icon
      name="lucide:radius"
      class="w-auto h-9 text-primary" />

    <div class="flex items-center justify-between space-x-4">
      <div
        @click="toggleDark()"
        class="cursor-pointer">
        <Icon
          name="line-md:sunny-filled-loop-to-moon-filled-transition"
          class="w-auto h-6"
          v-if="colorMode.preference === 'dark'" />
        <Icon
          name="line-md:moon-filled-to-sunny-filled-transition"
          class="w-auto h-6"
          v-else />
      </div>

      <div>
        <Icon
          name="ri:github-fill"
          class="w-auto h-6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

function toggleDark() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>
