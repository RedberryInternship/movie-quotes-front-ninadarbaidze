import axios from './axios';
import { AxiosResponse } from 'axios';

export const updateProfile = async (
  data: FormData
): Promise<AxiosResponse<any>> => {
  const response = await axios.post(`update-profile`, data);
  return response;
};

export const getUserInfo = async (
  userId: string | undefined | string[]
): Promise<AxiosResponse<any>> => {
  const response = await axios.get(`profile/${userId}`);
  return response;
};
