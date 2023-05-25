import { createSlice } from '@reduxjs/toolkit';
import { currenciesBuyAsync, currenciesRequestAsync } from './currenciesActions';

const initialState = {
  currencies: [],
  loading: false,
  error: '',
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: {
    [currenciesRequestAsync.pending.type]: state => {
      state.loading = true;
    },
    [currenciesRequestAsync.fulfilled.type]: (state, action) => {
      state.currencies = action.payload.currencies;
      state.loading = false;
    },
    [currenciesRequestAsync.rejected.type]: state => {
      state.loading = false;
    },
    [currenciesBuyAsync.pending.type]: state => {
      state.loading = true;
    },
    [currenciesBuyAsync.fulfilled.type]: (state, action) => {
      state.currencies = action.payload.currencies;
      state.error = action.payload.error;
      state.loading = false;
    },
    [currenciesBuyAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  }
});

export default currenciesSlice.reducer;
