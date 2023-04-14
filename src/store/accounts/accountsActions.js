import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';
import { getToken } from '../../utils/tokenStorage';

export const accountsRequestAsync = createAsyncThunk(
  'accounts/get',
  () => {
    return axios(
      `${URL_API}/accounts`,
      {
        headers: {
          Authorization: `Basic ${getToken()}`,
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
    const currentAccounts = getState().accounts.accounts;
    return axios.post(
      `${URL_API}/create-account`,
      {},
      {
        headers: {
          Authorization: `Basic ${getToken()}`,
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
