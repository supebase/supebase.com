<template>
  <div class="h-5">
    <UPopover
      v-model:open="link"
      :popper="{ offsetDistance: 15, placement: 'bottom-start' }">
      <Icon
        name="lucide:link"
        class="w-auto h-5 text-gray-500 cursor-pointer" />
      <template #panel>
        <div class="flex items-center gap-2 p-2 bg-white dark:bg-gray-950">
          <div class="space-y-2">
            <UInput
              v-model="text"
              autofocus
              placeholder="链接名称">
              <template #leading>
                <Icon
                  name="lucide:text-cursor-input"
                  class="w-auto h-4 text-gray-500" />
              </template>
            </UInput>
            <UInput
              v-model="url"
              placeholder="链接地址">
              <template #leading>
                <Icon
                  name="lucide:link"
                  class="w-auto h-4 text-gray-500" />
              </template>
            </UInput>
          </div>

          <UButton
            variant="ghost"
            @click.prevent="
              insert(`[${text}](${url})`);
              link = false;
              text = '';
              url = '';
            ">
            <template #leading>
              <Icon
                name="ri:add-circle-fill"
                class="w-auto h-5 text-primary" />
            </template>
          </UButton>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">
const link = ref(false);
const text = ref("");
const url = ref("");

const emits = defineEmits(["onInsert"]);

function insert(url: any) {
  // 获取当前文本框中的内容
  const input = document.querySelector(
    "textarea"
  ) as unknown as HTMLTextAreaElement;
  const text = input.value;

  // 获取光标的位置
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;

  // 插入链接地址
  const newText =
    text.substring(0, selectionStart) + url + text.substring(selectionEnd);
  input.value = newText;

  // 将光标移动到链接地址后面
  input.selectionStart = selectionStart + url.length;
  input.selectionEnd = selectionStart + url.length;

  emits("onInsert", newText);
  input.focus();
}
</script>
