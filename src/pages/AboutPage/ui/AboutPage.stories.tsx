import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
