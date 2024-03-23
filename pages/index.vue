<template>
  <div class="space-y-5">
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
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
          <div class="relative z-10 size-8 flex justify-center items-center">
            <UAvatar
              class="flex-shrink-0"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description" />
          </div>
        </div>

        <div class="grow pt-1 pb-6">
          <div
            class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            Will Smith
          </div>
          <div>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here. It reads the value from
              localStorage/sessionStorage (the key is configurable) to see if
              there is a user configured color scheme, if not, it will use
              users' system preferences.
            </p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <UAvatarGroup
                size="sm"
                class="cursor-pointer inline-flex flex-row-reverse justify-end">
                <UAvatar
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description" />
                <UAvatar
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Image Description" />
              </UAvatarGroup>
            </div>

            <ActionLike />
          </div>
        </div>
      </div>

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
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
          <div class="relative z-10 size-8 flex justify-center items-center">
            <UAvatar
              class="flex-shrink-0"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Image Description" />
          </div>
        </div>

        <div class="grow pt-1 pb-6">
          <div
            class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            John Carter
          </div>
          <div>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here. It reads the value from
              localStorage/sessionStorage (the key is configurable) to see if
              there is a user configured color scheme, if not, it will use
              users' system preferences.
            </p>
            <div class="text-center rounded-lg overflow-hidden mx-auto my-3">
              <img
                class="object-cover h-48 w-full"
                src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                alt="Image Description" />
            </div>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <UAvatarGroup
                size="sm"
                :max="4"
                class="cursor-pointer inline-flex flex-row-reverse justify-end">
                <UAvatar
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description" />
                <UAvatar
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description" />
                <UAvatar
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Image Description" />
                <UAvatar
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description" />
                <UAvatar
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description" />
              </UAvatarGroup>
            </div>

            <ActionLike />
          </div>
        </div>
      </div>

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
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
          <div class="relative z-10 size-8 flex justify-center items-center">
            <UAvatar
              class="flex-shrink-0"
              src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
              alt="Image Description" />
          </div>
        </div>

        <div class="grow pt-1 pb-6">
          <div
            class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            James Collins
          </div>
          <div>
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
          <div class="flex items-center justify-between mt-4">
            <div
              class="-ms-1 p-1 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
              <UAvatar
                class="flex-shrink-0"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description" />
              James Collins
            </div>

            <ActionLike />
          </div>
        </div>
      </div>

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
          class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:trangray-x-[1.5px] after:bg-gray-200 dark:after:bg-gray-800">
          <div class="relative z-10 size-8 flex justify-center items-center">
            <UAvatar
              class="flex-shrink-0"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description" />
          </div>
        </div>

        <div class="grow pt-1 pb-6">
          <div
            class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            Eric
          </div>
          <div>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here. It reads the value from
              localStorage/sessionStorage (the key is configurable) to see if
              there is a user configured color scheme, if not, it will use
              users' system preferences.
            </p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div class="text-sm text-gray-500 font-medium cursor-pointer">
              <div>
                <Icon
                  name="ri:chat-1-line"
                  class="w-auto h-5 text-gray-500 cursor-pointer" />
              </div>
            </div>

            <ActionLike />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const timeAgo = useLocaleTimeAgo(new Date("2024-03-22 09:00:00"));
</script>
