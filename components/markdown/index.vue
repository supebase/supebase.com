<template>
  <div
    class="prose prose-indigo prose-pre:rounded-lg prose-pre:bg-white prose-pre:text-gray-800 dark:prose-pre:text-gray-200 dark:prose-pre:bg-gray-950 prose-img:my-1 prose-img:inline-block prose-img:rounded-lg prose-h2:mt-0 prose-h3:mt-0 dark:prose-invert"
    v-html="markdown.render(source)" />
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const { copy } = useClipboard();

const markdown = new MarkdownIt({
  typographer: true,
  linkify: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre class='code-block cursor-pointer' @click='${copy(
            str
          )}'><code>` +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code><span class='code-label'>" +
          lang +
          "</span></pre>"
        );
      } catch (__) {}
    }

    return "<pre><code>" + markdown.utils.escapeHtml(str) + "</code></pre>";
  },
});

var defaultRender =
  markdown.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

markdown.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrSet("target", "_blank");
  return defaultRender(tokens, idx, options, env, self);
};

defineProps({
  source: {
    type: String,
    default: "",
  },
});
</script>
