import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const accountsRequestAsync = createAsyncThunk(
  'accounts/get',
  (args, {getState}) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/accounts`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({data}) => {
        const accounts = data.payload;
        const error = data.error;

        return {accounts, error};
      })
      .catch(error => Promise.reject(error));
  }
);

export const accountsCreateAsync = createAsyncThunk(
  'accounts/create-account',
  (args, {getState}) => {
    const token = getState().token.token;
    const currentAccounts = getState().accounts.accounts;

    return axios.post(
      `${URL_API}/create-account`,
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({data}) => {
        const accounts = [...currentAccounts, data.payload];
        const error = data.error;

        return {accounts, error};
      })
      .catch(error => Promise.reject(error));
  }
);
