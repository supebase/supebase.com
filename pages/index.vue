<template>
  <div>
    <div class="py-3">
      <UAlert
        class="my-3 text-red-500"
        :color="sensitive ? 'orange' : 'white'">
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
    </div>

    <form @submit.prevent="onSubmit">
      <div class="ring-2 ring-primary rounded-lg">
        <UTextarea
          variant="none"
          size="lg"
          autoresize
          autofocus
          :maxrows="8"
          :maxlength="limit"
          v-model="content"
          placeholder="最近有什么新鲜事要和大家分享？" />

        <div class="flex items-center justify-between px-3 py-1">
          <div class="flex items-center space-x-5">
            <Icon
              name="lucide:smile-plus"
              class="w-auto h-5 text-gray-500" />
            <Icon
              name="lucide:image-plus"
              class="w-auto h-5 text-gray-500" />
          </div>
          <div class="flex items-center space-x-5">
            <div class="text-sm font-medium text-gray-500">
              {{ /^[\s\n]*$/.test(content) ? 0 : content.length }} / {{ limit }}
            </div>

            <UButton
              variant="ghost"
              :disabled="
                publish ||
                !content ||
                /^[\s\n]*$/.test(content) ||
                isSensitive(content)
              "
              type="submit">
              <template #leading>
                <Icon
                  name="svg-spinners:90-ring-with-bg"
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

      <div class="my-5 space-y-5">
        <div class="flex items-center space-x-5">
          <div>
            <div class="text-sm font-medium">启用评论功能</div>
            <div class="text-sm text-gray-500">
              若您希望禁止其他用户在您的话题下发表评论，请选择关闭此功能。
            </div>
          </div>
          <UToggle v-model="allowComment" />
        </div>

        <div class="flex items-center space-x-5">
          <div>
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

const limit = ref(500);
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
</script>
