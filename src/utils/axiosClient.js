import axios from 'axios';

export const axiosClient = axios.create({
  baseURL:"https://replaicebackend.onrender.com",
  withCredentials: true,
})

