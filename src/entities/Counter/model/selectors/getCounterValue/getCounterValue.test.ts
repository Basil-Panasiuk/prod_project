import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounterValue', () => {
  const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
  it('should be correct value', () => {
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
