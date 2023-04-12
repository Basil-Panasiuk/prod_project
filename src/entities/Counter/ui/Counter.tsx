import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const Counter: FC = () => {
  const increment = (): void => {};
  const decrement = (): void => {};

  return (
    <div>
      <h1>{value}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
