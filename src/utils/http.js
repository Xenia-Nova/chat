import axios from 'axios';
import { baseUrl } from '../constants/urls';
import { snackbarEvents } from './custom-event';

export const HTTP = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

HTTP.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
  'PRIVATE-KEY': process.env.REACT_APP_SECRET
  }
}));

const onFulfilled = (response) => response.data;

const onRejected = (reject) => {
  const { message } = reject.response.data;
  document.dispatchEvent(snackbarEvents('snackbar', {
    message: message || 'Something went wrong, please try again later.',
    type: 'error-snackbar'
  }));

  return Promise.reject(message)
}

HTTP.interceptors.response.use(onFulfilled, onRejected);
