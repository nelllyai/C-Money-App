import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token/tokenSlice';
import accountsReducer from './accounts/accountsSlice';
import accountReducer from './account/accountSlice';
import currenciesReducer from './currencies/currenciesSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    accounts: accountsReducer,
    account: accountReducer,
    currencies: currenciesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(),
});
