import axios from 'axios';
import store from '../main/redux/store';
import {logoutAction} from './redux/actions';
const {dispatch} = store;
const instance = axios.create({baseURL: 'http://localhost:3000'});

const UNAUTHORIZED = 401;

instance.interceptors.response.use(
  response => response,
  error => {
    const {status} = error.response;
    if (status === UNAUTHORIZED) {
      dispatch(logoutAction);
    }
    return Promise.reject(error);
  },
);

export default {
  login: ({username, password}: any) => {
    return instance.post('/login', {username, password});
  },
  verify: ({token}: any) => {
    return instance.post('/verify', {token}).catch(() => {});
  },
};
