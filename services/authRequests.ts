import axios from './axios';
import {
  RegistrationTypes,
  ResponseToken,
  AuthGoogleTypes,
  PasswordRecoveryTypes,
  loginTypes,
} from 'types';
import { AxiosResponse } from 'axios';

export const signup = async (
  data: RegistrationTypes
): Promise<AxiosResponse<RegistrationTypes>> => {
  const response = await axios.post(`signup`, data);
  return response;
};

export const login = async (
  data: loginTypes
): Promise<AxiosResponse<ResponseToken>> => {
  const response = await axios.post(`login`, data);
  return response;
};

export const authGoogle = async (
  data: AuthGoogleTypes
): Promise<AxiosResponse<ResponseToken>> => {
  const response = await axios.post(`auth-google`, data);
  return response;
};

export const verifyAccount = async (
  data: ResponseToken
): Promise<AxiosResponse<ResponseToken>> => {
  const response = await axios.post(`verify-account`, data);
  return response;
};

export const passwordRecovery = async (
  data: PasswordRecoveryTypes
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`password-recovery`, data);
  return response;
};
