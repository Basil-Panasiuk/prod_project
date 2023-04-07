import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
  title: 'widgets/Loader',
  component: Loader,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
