import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
