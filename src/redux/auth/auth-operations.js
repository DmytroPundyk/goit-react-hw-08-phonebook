import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getUser } from '../../services/userRequests';
import toast from 'react-hot-toast';
import http from '../../services/axiosInstance';

const token = {
  set(token) {
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  unset() {
    http.defaults.headers.common['Authorization'] = ``;
  },
};

export const signUpOperation = createAsyncThunk(
  'auth/signUpUser',
  async userData => {
    try {
      const response = await signUp(userData);
      console.log('signUpResponse: ', response);
      token.set(response.data.token);
      toast.success(`You are registered!`);
      return response.data;
    } catch (error) {
      toast.error(`${error.response?.data.message}`);
      console.log('signUpError: ', error.response.data.message);
    }
  },
);

export const logInOperation = createAsyncThunk(
  'auth/logInUser',
  async userData => {
    try {
      const response = await logIn(userData);
      token.set(response.data.token);
      toast.success(`You are in!`);
      return response.data;
    } catch (error) {
      toast.error(`${error}`);
      console.log('logInError: ', error);
    }
  },
);

export const logOutOperation = createAsyncThunk('auth/logOutUser', async () => {
  try {
    const response = await logOut();
    token.unset();
    return response.data;
  } catch (error) {
    console.log('logOutError: ', error);
  }
});

export const getCurrentUserOperation = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.auth.token;
    if (!userToken) {
      return;
    }

    token.set(userToken);
    try {
      const response = await getUser();
      return response.data;
    } catch (error) {
      toast.error(`${error}`);
      console.log('getCurrentUserError: ', error);
    }
  },
);
