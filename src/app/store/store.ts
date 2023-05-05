import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { authApi } from '../../features/api/apiSlice';
import useReducer from '../../features/user/userSlice';

import counterReducer from '../../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, authApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;