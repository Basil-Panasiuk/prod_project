import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateShema';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
};
