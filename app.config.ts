export default defineAppConfig({
  ui: {
    primary: "emerald",
    gray: "cool",

    strategy: "override",

    container: {
      constrained: "max-w-md",
    },

    button: {
      rounded: "rounded-full",
      variant: {
        ghost:
          "text-{color}-500 dark:text-{color}-400 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      },
    },

    textarea: {
      rounded: "rounded-lg",
      placeholder: "placeholder-gray-300 dark:placeholder-gray-700",
    },

    divider: {
      label: "text-sm text-gray-300 dark:text-gray-700",
    },
  },
});
