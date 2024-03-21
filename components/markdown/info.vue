<template>
  <div class="h-5">
    <UPopover :popper="{ offsetDistance: 15, placement: 'bottom' }">
      <Icon
        name="material-symbols:markdown"
        class="w-auto h-5 text-gray-500 cursor-pointer" />
      <template #panel>
        <div class="p-2.5 text-sm">支持 Markdown 语法</div>
      </template>
    </UPopover>
  </div>
</template>
