module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  babel: (options) => {
    return {
      ...options,
      plugins: [
        [
          "babel-plugin-istanbul",
          {
            include: "src/components/**/*.{js,jsx,tsx,(!d).ts}",
          },
        ],
      ],
    };
  },
};
