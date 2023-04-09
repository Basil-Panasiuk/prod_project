import { DecoratorFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): DecoratorFn =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
