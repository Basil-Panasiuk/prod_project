import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = (): void => {
    dispatch(counterActions.increment());
  };
  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>value - {counterValue}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
