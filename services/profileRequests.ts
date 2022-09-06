import axios from './axios';
import { AxiosResponse } from 'axios';
import { ProfileResponse, ResponseToken } from 'types';

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
  const response = await axios.get(`user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const verifyEmail = async (
  data: ResponseToken
): Promise<AxiosResponse<string>> => {
  const response = await axios.post(`verify-email`, data);
  return response;
};

export const sendVerificationEmail = async (
  data: string
): Promise<AxiosResponse<string>> => {
  const response = await axios.post(`verify-email-send`, data);
  return response;
};
