import axios from './axios';
import { AxiosResponse } from 'axios';
import { ProfileResponse } from 'types';

export const updateProfile = async (
  data: FormData,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`update-profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const getUserInfo = async (
  userId: string | undefined | string[],
  token: string
): Promise<AxiosResponse<any, ProfileResponse>> => {
  const response = await axios.get(`profile/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
