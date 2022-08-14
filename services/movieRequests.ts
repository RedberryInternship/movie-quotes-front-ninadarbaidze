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
