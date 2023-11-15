import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonView } from './Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Click'
  }
};

export default ButtonMeta;


type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    view: ButtonView.CLEAR
  }
};

export const Outlined: Story = {
  args: {
    view: ButtonView.OUTLINED
  }
};
