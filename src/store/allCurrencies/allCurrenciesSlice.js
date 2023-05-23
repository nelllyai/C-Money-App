import { createSlice } from '@reduxjs/toolkit';
import { allCurrenciesRequestAsync } from './allCurrenciesActions';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

export const allCurrenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: {
    [allCurrenciesRequestAsync.pending.type]: state => {
      state.loading = true;
    },
    [allCurrenciesRequestAsync.fulfilled.type]: (state, action) => {
      state.list = action.payload.list;
      state.loading = false;
    },
    [allCurrenciesRequestAsync.rejected.type]: state => {
      state.loading = false;
    },
  }
});

export default allCurrenciesSlice.reducer;
