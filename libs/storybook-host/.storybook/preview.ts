import {Preview} from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters, addDecorator } from '@storybook/angular';

// Добавление глобальных параметров
addParameters({
  options: {
    storySort: {
      order: ['Introduction', 'Components', 'Pages'],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#333333' },
    ],
  },
});

// Добавление декораторов
addDecorator(withKnobs);
addDecorator(withA11y);

// Экспортируем настройки превью
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;