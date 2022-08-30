import axios from './axios';
import { AxiosResponse } from 'axios';
import { CommentRequest, LikeRequest, QuoteIdType, QuotesTypes } from 'types';

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

export const getQuotes = async (
  pageNumber: number,
  token: string
): Promise<AxiosResponse<any, QuotesTypes>> => {
  const response = await axios.get(`quotes?page=${pageNumber}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const searchQuotes = async (
  queryName: string,
  queryType: string | undefined,
  pageNumber: number,
  token: string
): Promise<AxiosResponse<any>> => {
  const response = await axios.get(
    `search-quotes?page=${pageNumber}&queryName=${queryName}&queryType=${queryType}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const likePost = async (
  data: LikeRequest,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-like`, {
    headers: { Authorization: `Bearer ${token}` },
    ...data,
  });
  return response;
};
export const commentPost = async (
  data: CommentRequest,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-comment`, {
    headers: { Authorization: `Bearer ${token}` },
    ...data,
  });
  return response;
};

export const getNotifications = async (
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.get(`notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const markAsRead = async (
  notificationId: string,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.patch(`read-notifications/${notificationId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteAllNotifications = async (
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.delete(`delete-notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
