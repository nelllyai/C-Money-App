import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const allCurrenciesRequestAsync = createAsyncThunk(
  'allCurrencies/get',
  (args, { getState }) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/all-currencies`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(({ data }) => {
        const list = data.payload;
        return { list };
      })
      .catch(error => Promise.reject(error));
  }
);
