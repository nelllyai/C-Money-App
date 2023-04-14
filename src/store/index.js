import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token/tokenSlice';
import accountsReducer from './accounts/accountsSlice';
import accountReducer from './account/accountSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    accounts: accountsReducer,
    account: accountReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(),
});
