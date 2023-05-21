import { createSlice } from '@reduxjs/toolkit';
import { currenciesRequestAsync } from './currenciesActions';

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
  }
});

export default currenciesSlice.reducer;
