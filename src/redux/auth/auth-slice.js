import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../../redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUpOperation.fulfilled]: (state, { payload }) => {
      if (!payload) {
        return;
      }
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },

    [authOperations.logInOperation.fulfilled]: (state, { payload }) => {
      if (!payload) {
        return;
      }
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },

    [authOperations.logOutOperation.fulfilled]: state => ({
      ...state,
      ...initialState,
    }),

    [authOperations.getCurrentUserOperation.fulfilled]: (
      state,
      { payload },
    ) => {
      if (!payload) {
        return;
      }
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    },
  },
});

export default authSlice.reducer;
