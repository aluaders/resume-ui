import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { MenuNavigation } from './MenuNavigation';

const meta = {
  title: 'components/MenuNavigation',
  component: MenuNavigation,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof MenuNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
