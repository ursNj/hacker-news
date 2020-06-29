import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://134.122.117.60/nj/server',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});
