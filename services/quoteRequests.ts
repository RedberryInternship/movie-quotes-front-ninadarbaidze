import axios from './axios';
import { AxiosResponse } from 'axios';

export const addQuote = async (
  data: FormData,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-quote`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
