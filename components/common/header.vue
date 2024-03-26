<template>
  <div class="flex items-center justify-between h-16">
    <transition-group name="auth">
      <Icon
        name="lucide:radius"
        class="w-auto h-8 text-primary"
        v-if="!store.isAuth" />
      <UAvatar
        src="https://avatars.githubusercontent.com/u/11247099?s=80&v=4"
        alt="Avatar"
        class="cursor-pointer"
        @click="isLeave = true"
        v-else />
    </transition-group>

    <div class="flex items-center justify-between space-x-4">
      <div
        @click="toggleDark()"
        class="cursor-pointer text-gray-500">
        <Icon
          name="line-md:sunny-filled-loop-to-moon-filled-transition"
          class="w-auto h-6"
          v-if="colorMode.preference === 'dark'" />
        <Icon
          name="line-md:moon-filled-to-sunny-filled-transition"
          class="w-auto h-6"
          v-else />
      </div>

      <div class="w-[75px]">
        <transition-group name="status">
          <div v-if="!store.isAuth">
            <UButton
              color="black"
              :label="$t('common.header.login')"
              @click="store.isAuth = true">
              <template #leading>
                <Icon
                  name="ri:github-fill"
                  class="w-auto h-5" />
              </template>
            </UButton>
          </div>

          <div v-else-if="$route.name !== 'new'">
            <UButton
              color="lime"
              :label="$t('common.header.write')"
              to="/new">
              <template #leading>
                <Icon
                  name="ri:quill-pen-fill"
                  class="w-auto h-5" />
              </template>
            </UButton>
          </div>

          <div v-else>
            <UButton
              color="amber"
              :label="$t('common.header.cancel')"
              @click="$router.back()">
              <template #leading>
                <Icon
                  name="ri:close-circle-line"
                  class="w-auto h-5" />
              </template>
            </UButton>
          </div>
        </transition-group>
      </div>
    </div>
  </div>

  <UModal v-model="isLeave">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }">
      <template #header>
        <div class="flex items-center gap-2 h-4">
          <Icon
            name="ri:logout-circle-line"
            class="w-auto h-5" />

          <div class="text-base font-semibold text-gray-950 dark:text-white">
            确定要退出登录吗？
          </div>
        </div>
      </template>

      <div class="flex justify-end gap-4">
        <UButton
          :label="$t('common.header.cancel')"
          color="black"
          class="px-4"
          @click="isLeave = false" />

        <UButton
          :label="$t('common.header.confirm')"
          color="red"
          class="px-4"
          @click="logOut" />
      </div>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

function toggleDark() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const store = useStore();

const isLeave = ref(false);

const logOut = () => {
  store.isAuth = false;
  isLeave.value = false;

  navigateTo("/");
};
</script>
