import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from 'entities/Counter';

export const getCounter = (state: StateSchema): CounterSchema => {
  return state.counter;
};
