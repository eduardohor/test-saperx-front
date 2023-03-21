import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
  headers:{
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
});