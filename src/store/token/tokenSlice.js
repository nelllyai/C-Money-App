import { createSlice } from '@reduxjs/toolkit';
import { tokenRequestAsync } from './tokenActions';

const initialState = {
  token: '',
  error: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    tokenSet: (state, action) => {
      state.token = action.payload.tokenStorage;
      state.error = '';
    },
    tokenDelete: state => {
      state.token = '';
      state.error = '';
    }
  },
  extraReducers: {
    [tokenRequestAsync.pending.type]: state => {
      state.error = '';
    },
    [tokenRequestAsync.fulfilled.type]: (state, action) => {
      state.token = action.payload.token;
      state.error = action.payload.error;
    },
    [tokenRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  }
});

export default tokenSlice.reducer;
