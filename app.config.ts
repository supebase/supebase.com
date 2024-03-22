export default defineAppConfig({
  ui: {
    primary: "indigo",
    gray: "cool",

    strategy: "override",

    container: {
      constrained: "max-w-md",
    },

    button: {
      rounded: "rounded-full",
      variant: {
        ghost:
          "text-{color}-500 dark:text-{color}-400 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-0 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      },
    },

    textarea: {
      rounded: "rounded-lg",
      placeholder: "placeholder-gray-300 dark:placeholder-gray-700",
    },

    divider: {
      label: "text-sm text-gray-300 dark:text-gray-700",
    },

    toggle: {
      ring: "focus-visible:ring-0 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-0 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
    },

    modal: {
      container:
        "flex max-w-sm mx-auto min-h-full items-center justify-center text-center",
      overlay: {
        base: "fixed inset-0 transition-opacity radial backdrop-blur",
      },
    },

    avatarGroup: {
      ring: "ring-2 ring-gray-100 dark:ring-gray-900",
    },
  },
});
