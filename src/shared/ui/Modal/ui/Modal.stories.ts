import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const ModalMeta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem lorem lorem lorem lorem'
  }
};

export default ModalMeta;

type Story = StoryObj<typeof Modal>

export const Opened: Story = {
  args: {
    isOpen: true
  }
};
