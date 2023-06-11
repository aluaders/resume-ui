import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Header } from './Header';

const meta = {
  title: 'components/Header',
  component: Header,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
