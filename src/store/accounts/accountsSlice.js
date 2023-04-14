import { createSlice } from '@reduxjs/toolkit';
import { accountsCreateAsync, accountsRequestAsync } from './accountsActions';

const initialState = {
  accounts: [],
  loading: false,
  error: '',
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    [accountsRequestAsync.pending.type]: state => {
      state.error = '';
      state.loading = true;
    },
    [accountsRequestAsync.fulfilled.type]: (state, action) => {
      state.accounts = action.payload.accounts;
      state.loading = false;
      state.error = action.payload.error;
    },
    [accountsRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [accountsCreateAsync.pending.type]: state => {
      state.error = '';
      state.loading = true;
    },
    [accountsCreateAsync.fulfilled.type]: (state, action) => {
      state.accounts = action.payload.accounts;
      state.loading = false;
      state.error = action.payload.error;
    },
    [accountsCreateAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  }
});

export default accountsSlice.reducer;
