import { createSlice } from '@reduxjs/toolkit';
import { accountRequestAsync } from './accountActions';

const initialState = {
  account: {},
  loading: false,
  error: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {
    [accountRequestAsync.pending.type]: state => {
      state.loading = true;
    },
    [accountRequestAsync.fulfilled.type]: (state, action) => {
      state.account = action.payload.account;
      state.loading = false;
    },
    [accountRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
    },
  }
});

export default accountSlice.reducer;
