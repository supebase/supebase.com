<template>
  <div class="space-y-5">
    <UAlert :color="sensitive ? 'orange' : 'white'">
      <template #description>
        <div v-if="sensitive">
          您的话题中包含不允许的敏感词 <b>{{ words }}</b>
          <p>
            若继续发布含有敏感词的信息，我们将不得不采取账户封禁措施。感谢您的理解与合作。
          </p>
        </div>
        <div v-else>
          在发布新话题时，若发现包含不符合规定的敏感词，系统将提示进行修改。若用户采取其他方式发布含有敏感词的话题，账户将面临封禁处理。
        </div>
      </template>
    </UAlert>

    <form
      @submit.prevent="onSubmit"
      class="space-y-5">
      <div
        class="ring-1 ring-gray-200 dark:ring-gray-800 focus:outline-none focus-within:ring-2 focus-within:ring-primary dark:focus:outline-none dark:focus-within:ring-2 dark:focus-within:ring-primary bg-white dark:bg-gray-950 rounded-lg">
        <UTextarea
          variant="none"
          size="lg"
          autoresize
          autofocus
          :maxrows="8"
          :maxlength="limit"
          v-model="content"
          placeholder="最近有什么新鲜事要和大家分享？" />

        <div class="flex items-center justify-between px-3 py-1 h-10">
          <div class="flex items-center space-x-5">
            <Emoji @onSelect="handleEmojiPickup" />

            <Image @onInsert="handleImageInsert" />
          </div>
          <div class="flex items-center space-x-5">
            <MarkdownInfo />

            <div class="text-sm font-medium text-gray-500">
              {{ /^[\s\n]*$/.test(content) ? 0 : content.length }} / {{ limit }}
            </div>

            <UButton
              variant="ghost"
              class="w-8"
              :disabled="
                publish ||
                !content ||
                /^[\s\n]*$/.test(content) ||
                isSensitive(content)
              "
              type="submit">
              <template #leading>
                <Icon
                  name="line-md:loading-twotone-loop"
                  class="w-auto h-5"
                  v-if="publish" />

                <Icon
                  name="ri:quill-pen-fill"
                  class="w-auto h-5"
                  :class="
                    !content ||
                    /^[\s\n]*$/.test(content) ||
                    isSensitive(content)
                      ? 'text-gray-500'
                      : ''
                  "
                  v-else />
              </template>
            </UButton>
          </div>
        </div>
      </div>

      <div class="space-y-5">
        <div class="flex items-center space-x-5">
          <div class="space-y-1">
            <div class="text-sm font-medium">启用评论功能</div>
            <div class="text-sm text-gray-500">
              若您希望禁止其他用户在您的话题下发表评论，请选择关闭此功能。
            </div>
          </div>
          <UToggle v-model="allowComment" />
        </div>

        <div class="flex items-center space-x-5">
          <div class="space-y-1">
            <div class="text-sm font-medium">启用评论提醒</div>
            <div class="text-sm text-gray-500">
              当您的话题收到来自其他用户的评论时，系统将自动发送消息通知您。
            </div>
          </div>
          <UToggle v-model="allowCommentNotify" />
        </div>
      </div>

      <UDivider
        label="预览"
        class="my-5" />

      <div v-if="content && !/^[\s\n]*$/.test(content)">
        <Markdown :source="content" />
      </div>
      <div
        v-else
        class="text-sm text-center text-gray-300 dark:text-gray-700">
        实时预览即将分享的话题内容
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const limit = ref(1000);
const content = ref("");
const allowComment = ref(true);
const allowCommentNotify = ref(false);

interface SensitiveWordsData {
  words: string[];
}

const { data } = await supabase.from("sensitive").select();

const words = ref("");

const isSensitive = (word: string) => {
  const wordsData = data as SensitiveWordsData[];

  if (wordsData && wordsData.length > 0) {
    for (let i = 0; i < wordsData[0].words.length; i++) {
      if (word.includes(wordsData[0].words[i])) {
        words.value = wordsData[0].words[i];
        return true;
      }
    }
  }
  return false;
};

const sensitive = ref(false);

watch(content, () => {
  if (isSensitive(content.value)) {
    sensitive.value = true;
  } else {
    sensitive.value = false;
  }
});

const publish = ref(false);

const onSubmit = async () => {
  publish.value = true;

  setTimeout(() => {
    publish.value = false;

    content.value = "";
    allowComment.value = true;
    allowCommentNotify.value = false;
  }, 3000);
};

const handleEmojiPickup = (emoji: any) => {
  content.value = emoji;
};

const handleImageInsert = (url: string) => {
  content.value = url;
};
</script>
