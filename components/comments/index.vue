<template>
  <div class="space-y-3">
    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-4 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
        <div class="relative z-10 size-8 flex justify-center items-center">
          <UAvatar
            class="flex-shrink-0"
            src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
            alt="Image Description" />
        </div>
      </div>

      <div class="grow pt-1 pb-3">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          James Collins
        </h3>
        <div>
          <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here. It reads the value from
              localStorage/sessionStorage (the key is configurable) to see if
              there is a user configured color scheme, if not, it will use
              users' system preferences.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3
            class="flex items-center gap-1 text-xs font-medium uppercase text-gray-500">
            {{ timeAgo }}
            <Icon
              name="mdi:dot"
              class="w-[1rem] h-[1rem]" />
            来自地球
          </h3>

          <ActionLike />
        </div>
      </div>
    </div>

    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-4 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
        <div class="relative z-10 size-8 flex justify-center items-center">
          <UAvatar
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description" />
        </div>
      </div>

      <div class="grow pt-1 pb-3">
        <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          Eric
        </h3>
        <div>
          <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here. It reads the value from
              localStorage/sessionStorage (the key is configurable) to see if
              there is a user configured color scheme, if not, it will use
              users' system preferences.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-2">
          <h3
            class="flex items-center gap-1 text-xs font-medium uppercase text-gray-500">
            {{ timeAgo }}
            <Icon
              name="mdi:dot"
              class="w-[1rem] h-[1rem]" />
            来自地球
          </h3>

          <ActionLike />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const timeAgo = useLocaleTimeAgo(new Date("2024-03-22 09:00:00"));
</script>
