import '../src/token/css/index.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    designToken: {
      defaultTab: 'Design Tokens/Introduction'
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
