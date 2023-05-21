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
