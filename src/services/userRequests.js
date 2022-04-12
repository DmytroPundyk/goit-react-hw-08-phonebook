import http from './axiosInstance';

export const signUp = userData => {
  return http.post('users/signup', userData);
};

export const logIn = userData => {
  return http.post('users/login', userData);
};

export const logOut = () => {
  return http.post('users/logout');
};

export const getUser = () => {
  return http.get('users/current');
};
