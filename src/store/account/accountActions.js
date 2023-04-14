import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';
import { getToken } from '../../utils/tokenStorage';

export const accountRequestAsync = createAsyncThunk(
  'account/get',
  (id) => {
    return axios(
      `${URL_API}/account/${id}`,
      {
        headers: {
          Authorization: `Basic ${getToken()}`,
        },
      })
      .then(({data}) => {
        const account = data.payload;
        return {account};
      })
      .catch(error => Promise.reject(error));
  }
);
