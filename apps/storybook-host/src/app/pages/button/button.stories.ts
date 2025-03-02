import { Meta, StoryObj } from '@storybook/angular';
import { MyButtonComponent } from '@my-lib';
import DocumentationTemplate from './documentation-template.mdx';

const meta: Meta<MyButtonComponent> = {
  title: 'Button component',
  component: MyButtonComponent,
};

export default meta;

type Story = StoryObj<MyButtonComponent>;

export const Demo: Story = {
  name: 'Button Component',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
    controls: { expanded: true },
  },
  argTypes: {
    size: {
      description: 'Размер кнопки',
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'inline-check' },
    },
  },
  render: (args) => ({
    props: args,
    template: `
              <my-button size="xs">🦋 My Button</my-button>
              <my-button size="s">🦋 My Button</my-button>
              <my-button size="m">🦋 My Button</my-button>
              <my-button size="l">🦋 My Button</my-button>
    `,
  }),
};
