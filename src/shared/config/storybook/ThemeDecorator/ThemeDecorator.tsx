import { DecoratorFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): DecoratorFn =>
  // eslint-disable-next-line react/display-name
  (StoryComponent) => {
    return (
      <ThemeProvider initTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
