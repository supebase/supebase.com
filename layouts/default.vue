<template>
  <div>
    <div
      class="sticky top-0 z-50 border-b border-b-gray-200 dark:border-b-gray-800 bg-gray-100/70 dark:bg-gray-900/70 backdrop-blur radial">
      <UContainer>
        <CommonHeader />
      </UContainer>
    </div>

    <UContainer class="my-5">
      <NuxtPage
        :transition="{ name: 'page', mode: 'out-in' }"
        :page-key="(route) => route.fullPath" />
    </UContainer>
  </div>
</template>

<script lang="ts" setup>

</script>
