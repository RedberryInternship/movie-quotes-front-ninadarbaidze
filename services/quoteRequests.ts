import axios from './axios';
import { AxiosResponse } from 'axios';
import { QuoteIdType } from 'types';

export const addQuote = async (
  data: FormData,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-quote`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteQuote = async (
  data: QuoteIdType,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.delete(`delete-quote`, {
    headers: { Authorization: `Bearer ${token}` },
    data,
  });
  return response;
};

export const getQuoteById = async (
  quoteId: string,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.get(`quote/${quoteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const updateQuote = async (
  data: unknown,
  token: string,
  quoteId: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.patch(`/edit-quote/${quoteId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
