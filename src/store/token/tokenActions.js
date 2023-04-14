import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';
import { setToken } from '../../utils/tokenStorage';

export const tokenRequestAsync = createAsyncThunk(
  'token/get',
  ({login, password}) => {
    return axios.post(
      `${URL_API}/login`,
      {
        login,
        password
      })
      .then(({data}) => {
        const token = data.payload ? data.payload.token : '';
        const error = data.error;

        if (token) setToken(token);

        return {token, error};
      })
      .catch(error => Promise.reject(error));
  }
);
