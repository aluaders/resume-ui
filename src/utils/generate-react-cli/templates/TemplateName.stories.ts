import type { Meta, StoryObj } from '@storybook/react';

import { TemplateName } from './TemplateName';

const meta = {
  title: 'components/TemplateName',
  component: TemplateName,
  tags: ['autodocs'],
} satisfies Meta<typeof TemplateName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
