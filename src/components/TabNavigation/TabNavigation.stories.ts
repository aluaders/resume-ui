import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { TabNavigation } from './TabNavigation';

const meta = {
  title: 'components/TabNavigation',
  component: TabNavigation,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof TabNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
