import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  it('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } }
    });

    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
  });

  it('should increment counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } }
    });

    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
  });

  it('should decrement counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } }
    });

    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
  });
});
