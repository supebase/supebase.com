<template>
  <div class="h-5">
    <UPopover
      v-model:open="emoji"
      :popper="{ offsetDistance: 15, placement: 'bottom-start' }">
      <Icon
        name="lucide:smile-plus"
        class="w-auto h-5 text-gray-500 cursor-pointer" />

      <!-- Content -->
      <template #panel>
        <div
          class="emoji-container"
          @click.stop>
          <!-- Emojis -->
          <div class="emoji-grid">
            <a
              v-for="(item, index) in filtered"
              :key="index"
              @click.prevent="
                select(item.emoji);
                emoji = false;
              "
              class="emoji">
              {{ item.emoji }}
            </a>
          </div>

          <!-- Category Buttons -->
          <div class="emoji-button p-1">
            <!-- Other Categories -->
            <div
              v-for="(item, index) in emojis"
              :key="index"
              @click="changeGroup(String(index))"
              :class="{ 'active-group': activeGroup === index }">
              {{ item[0].emoji }}
            </div>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">
import EmojisList from "@/assets/emojis";

interface Emoji {
  no: number;
  code: string;
  emoji: string;
  description: string;
  flagged: boolean;
  keywords: string[];
}

interface Emojis {
  [key: string]: Emoji[];
}

const emits = defineEmits(["onSelect"]);
const emoji = ref(false);
const filter = ref("");
const emojis = ref<Emojis>(EmojisList);
const activeGroup = ref("Smileys & People");
const filtered = ref<Partial<Emoji>[]>();

/**
 * Update the emojis that are displayed.
 *
 * Fires on mount, on change group and when a user searches.
 */

async function update() {
  const all = Object.keys(emojis.value);

  // if recent group get cookie and parse into array
  if (activeGroup.value === "recent" && !filter.value) {
    const recent = useCookie("recentEmojis");
    if (recent.value) {
      const recentFormatted = recent.value
        .split("_")
        .filter((v: any) => v)
        .map((v: any) => ({ emoji: v }))
        .reverse();

      filtered.value = recentFormatted;
      return;
    }
  }

  // return if no filter
  if (all.length && !filter.value) {
    filtered.value = emojis.value[activeGroup.value];
    return;
  }

  // use filter to find emojis
  if (filter.value) {
    const temp: Emoji[] = [];
    Object.keys(emojis.value).forEach((key) => {
      for (let i = 0; i < emojis.value[key].length; i += 1) {
        const item = emojis.value[key][i];
        if (
          item.description.includes(filter.value) ||
          item.keywords.some((x: string) => x.includes(filter.value))
        ) {
          temp.push(item);
        }
      }
    });
    filtered.value = temp;
  }
}

/**
 * Change the active displayed category
 *
 * @param value - name of the emoji category
 */
function changeGroup(value: string) {
  activeGroup.value = value;
  filter.value = "";
  update();
}

/**
 * Emits the selected Emoji & saves a cookie
 *
 * @param item - the emoji
 */
function select(item: any) {
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
    text.substring(0, selectionStart) + item + text.substring(selectionEnd);
  input.value = newText;

  // 将光标移动到表情符号后面
  input.selectionStart = selectionStart + item.length;
  input.selectionEnd = selectionStart + item.length;

  // emit the emoji
  emits("onSelect", newText);
  input.focus();

  // add the emoji into recently used cookie
  const recentEmojisCookie = useCookie("recentEmojis", { default: () => "" });
  recentEmojisCookie.value.replace(`_${item}`, ""); // remove it if it exists
  recentEmojisCookie.value += `_${item}`; // add it to the start
}

onMounted(() => update());
</script>

<style scoped>
a {
  text-decoration: none;
}

/** Container */
.emoji-container {
  text-align: left;
  padding: 4px;
  max-height: 500px;
  overflow: auto;
  background-color: #ffffff;
}

.dark .emoji-container {
  text-align: left;
  padding: 4px;
  max-height: 500px;
  overflow: auto;
  background-color: #030712;
}

/* Toggle Button */
.emoji-toggle {
  display: inline-block;
}
.emoji-toggle-fallback {
  background: #fff;
  border: 1px solid lightgrey;
  color: #8e8e8e;
  font-size: 15px;
  border-radius: 4px;
  aspect-ratio: 1;
}
.emoji-toggle-fallback:hover {
  background: #f9fafb;
  cursor: pointer;
}

/** Emoji */
.emoji-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 190px;
  overflow: auto;
  padding-top: 0px;
  align-content: start;
  scrollbar-width: none;
}
.emoji {
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  width: 37px;
  height: 37px;
}
.emoji:hover {
  background: #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
}
.dark .emoji:hover {
  background: #1f2937;
  border-radius: 6px;
  cursor: pointer;
}
.emoji-button {
  padding-top: 6px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-around;
  gap: 5px;
}
.dark .emoji-button {
  padding-top: 6px;
  border-top: 1px solid #111827;
  display: flex;
  justify-content: space-around;
  gap: 5px;
}
.emoji-button > div {
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}
.emoji-button > div:hover {
  background: #e5e7eb;
  cursor: pointer;
}
.active-group {
  background: #e5e7eb;
}

.dark .emoji-button > div:hover {
  background: #1f2937;
  cursor: pointer;
}
.dark .active-group {
  background: #1f2937;
}
</style>
