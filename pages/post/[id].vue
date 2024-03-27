<template>
  <div>
    <div class="ps-11 flex items-center justify-between">
      <div class="text-xs font-medium text-gray-500">
        {{ timeAgo }}
      </div>

      <Icon
        name="ri:more-fill"
        class="w-auto h-5 text-gray-500 cursor-pointer" />
    </div>

    <div class="flex gap-x-3">
      <div
        class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px">
        <div class="relative z-10 size-8 flex justify-center items-center">
          <UAvatar
            class="flex-shrink-0"
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
            alt="Image Description" />
        </div>

        <div class="ml-1.5 mt-3 sticky top-20">
          <Icon
            name="ri:arrow-go-back-fill"
            class="w-auto h-5 text-gray-500 cursor-pointer"
            v-if="$route.name === 'post-id'"
            @click="$router.push('/')" />
        </div>
      </div>

      <div class="grow pt-1 pb-6">
        <div class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          John Carter
        </div>
        <div>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <div class="text-center rounded-lg overflow-hidden mx-auto my-3">
            <img
              class="object-cover h-48 w-full"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
              alt="Image Description" />
          </div>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <div class="text-center rounded-lg overflow-hidden mx-auto my-3">
            <img
              class="object-cover h-48 w-full"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
              alt="Image Description" />
          </div>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <div class="text-center rounded-lg overflow-hidden mx-auto my-3">
            <img
              class="object-cover h-48 w-full"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
              alt="Image Description" />
          </div>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Find more detailed insctructions here. It reads the value from
            localStorage/sessionStorage (the key is configurable) to see if
            there is a user configured color scheme, if not, it will use users'
            system preferences.
          </p>
        </div>

        <div class="sticky bottom-4 z-20 flex justify-center my-6">
          <div
            class="bg-gray-200 dark:bg-gray-800 py-2 px-3 rounded-lg shadow-sm flex justify-center items-center">
            <div class="flex items-center justify-between gap-3">
              <ULink
                to="#comments"
                class="flex items-center gap-1.5 text-gray-500 font-medium font-mono cursor-pointer">
                <Icon
                  name="ri:chat-1-line"
                  class="h-[1.4rem] w-[1.4rem]" />
                <span>3</span>
              </ULink>

              <div class="text-sm text-gray-300 dark:text-gray-700 px-2">|</div>

              <ActionLike />
            </div>
          </div>
        </div>

        <div id="comments">
          <Comments />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const timeAgo = useLocaleTimeAgo(new Date("2024-03-22 09:00:00"));
</script>
