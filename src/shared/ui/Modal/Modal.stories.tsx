import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda commodi, consectetur earum eligendi fugiat impedit labore omnis quasi ratione repudiandae similique soluta sunt ullam, ut vel velit, vitae?',
    isOpen: true
  }
};

export const Dark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda commodi, consectetur earum eligendi fugiat impedit labore omnis quasi ratione repudiandae similique soluta sunt ullam, ut vel velit, vitae?',
    isOpen: true
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
