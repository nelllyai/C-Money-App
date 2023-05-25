import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const currenciesRequestAsync = createAsyncThunk(
  'currencies/get',
  (args, { getState }) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/currencies`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({ data }) => {
        const currencies = Object.values(data.payload);
        return { currencies };
      })
      .catch(error => Promise.reject(error));
  }
);

export const currenciesBuyAsync = createAsyncThunk(
  'currencies/buy',
  ({ from, to, amount }, { getState }) => {
    const token = getState().token.token;
    const currentCurrencies = getState().currencies.currencies;

    return axios.post(
      `${URL_API}/currency-buy`,
      {
        from,
        to,
        amount,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({ data }) => {
        const currencies =
          data.payload === null ?
            currentCurrencies :
            Object.values(data.payload);
        const error = data.error;

        return { currencies, error };
      })
      .catch(error => Promise.reject(error));
  }
);
