import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonView } from './Button';
import { BackgroundColor } from 'shared/lib/colors';

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

export const Filled: Story = {
  args: {
    view: ButtonView.FILLED,
    backgroundColor: BackgroundColor.APP_CONTRAST
  }
};

export const SizeS: Story = {
  args: {
    view: ButtonView.FILLED,
    backgroundColor: BackgroundColor.APP_CONTRAST,
    size: ButtonSize.S
  }
};

export const SizeM: Story = {
  args: {
    view: ButtonView.FILLED,
    backgroundColor: BackgroundColor.APP_CONTRAST,
    size: ButtonSize.M
  }
};

export const SizeL: Story = {
  args: {
    view: ButtonView.FILLED,
    backgroundColor: BackgroundColor.APP_CONTRAST,
    size: ButtonSize.L
  }
};
