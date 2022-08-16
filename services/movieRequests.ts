import axios from './axios';
import { AxiosResponse } from 'axios';

export const addMovie = async (
  data: FormData,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-movie`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

//change response
export const getMovies = async (token: string): Promise<AxiosResponse<any>> => {
  const response = await axios.get(`movies`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
