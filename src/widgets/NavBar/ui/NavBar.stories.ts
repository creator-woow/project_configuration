import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const NavBarMeta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar
};

export default NavBarMeta;

type Story = StoryObj<typeof NavBar>

export const Default: Story = {};
