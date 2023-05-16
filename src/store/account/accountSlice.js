import { createSlice } from '@reduxjs/toolkit';
import { accountRequestAsync, transferPostAsync } from './accountActions';

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
    [accountRequestAsync.rejected.type]: state => {
      state.loading = false;
    },
    [transferPostAsync.fulfilled.type]: (state, action) => {
      if (!action.payload.error) {
        state.account = action.payload.account;
      }
      state.error = action.payload.error;
    },
    [transferPostAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
    },
  }
});

export default accountSlice.reducer;
