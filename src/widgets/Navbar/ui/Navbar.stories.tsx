import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
