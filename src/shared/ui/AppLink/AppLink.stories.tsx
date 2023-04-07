import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'widgets/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
  }
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
  }
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
