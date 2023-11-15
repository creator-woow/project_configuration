import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const SibebarMeta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar
};

export default SibebarMeta;

type Story = StoryObj<typeof Sidebar>;

export const Collapsed: Story = {
  args: {
    expanded: false
  }
};

export const Expanded: Story = {
  args: {
    expanded: true
  }
};
