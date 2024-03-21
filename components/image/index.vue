<template>
  <Icon
    name="lucide:image-plus"
    class="w-auto h-5 text-gray-500 cursor-pointer"
    @click.prevent="insert('![图片描述](图片地址)')" />
</template>

<script setup lang="ts">
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

  // 插入表情符号
  const newText =
    text.substring(0, selectionStart) + url + text.substring(selectionEnd);
  input.value = newText;

  // 将光标移动到表情符号后面
  input.selectionStart = selectionStart + url.length;
  input.selectionEnd = selectionStart + url.length;

  emits("onInsert", newText);
}
</script>
