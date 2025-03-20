import axios from 'axios';

export const axiosClient = axios.create({
  baseURL:"http://localhost:5001",
  withCredentials: true,
})

