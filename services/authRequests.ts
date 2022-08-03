import axios from './axios';
import { RegistrationTypes, VerifyAccountTypes, authGoogleTypes } from 'types';
import { AxiosResponse } from 'axios';

export const signup = async (
  data: RegistrationTypes
): Promise<AxiosResponse<RegistrationTypes>> => {
  const response = await axios.post(`signup`, data);
  return response;
};

export const authGoogle = async (
  data: authGoogleTypes
): Promise<AxiosResponse<VerifyAccountTypes>> => {
  const response = await axios.post(`auth-google`, data);
  return response;
};

export const verifyAccount = async (
  data: VerifyAccountTypes
): Promise<AxiosResponse<VerifyAccountTypes>> => {
  const response = await axios.post(`verify-account`, data);
  return response;
};
