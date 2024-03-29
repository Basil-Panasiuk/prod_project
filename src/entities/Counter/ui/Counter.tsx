import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = (): void => {
    dispatch(counterActions.increment());
  };
  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
