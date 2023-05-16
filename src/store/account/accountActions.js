import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const accountRequestAsync = createAsyncThunk(
  'account/get',
  (id, {getState}) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/account/${id}`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({data}) => {
        const account = data.payload;
        return {account};
      })
      .catch(error => Promise.reject(error));
  }
);

export const transferPostAsync = createAsyncThunk(
  'account/send',
  (transactionInfo, {getState}) => {
    const token = getState().token.token;
    const currentAccount = getState().account.account.account;

    console.log(currentAccount);

    const {to, amount} = transactionInfo;

    return axios.post(
      `${URL_API}/transfer-funds`,
      {
        from: currentAccount,
        to,
        amount,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({data}) => {
        console.log(data);
        const account = data.payload;
        const error = data.error;

        return {account, error};
      })
      .catch(error => Promise.reject(error));
  }
);
