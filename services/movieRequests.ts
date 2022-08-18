import axios from './axios';
import { AxiosResponse } from 'axios';
import { MovieStateTypes } from 'types';

export const addMovie = async (
  data: FormData,
  token: string
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.post(`add-movie`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const getMovies = async (
  token: string
): Promise<AxiosResponse<any, MovieStateTypes[]>> => {
  const response = await axios.get(`movies`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
export const getGenres = async (): Promise<
  AxiosResponse<any, { label: string; value: string }>
> => {
  const response = await axios.get(`genres`);
  return response;
};

export const getMovieById = async (
  movieId: string
): Promise<AxiosResponse<any, MovieStateTypes>> => {
  const response = await axios.get(`movies/${movieId}`);
  return response;
};

export const editMovie = async (
  data: unknown,
  token: string,
  movieId: string | undefined | string[]
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.patch(`edit-movie/${movieId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteMovie = async (
  token: string,
  data: string | string[] | undefined
): Promise<AxiosResponse<any, string>> => {
  const response = await axios.delete(`delete-movie`, {
    headers: { Authorization: `Bearer ${token}` },
    data,
  });
  return response;
};
