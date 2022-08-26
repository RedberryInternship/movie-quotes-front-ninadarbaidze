import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export type ClassName = {
  className?: string;
};

export type ChildrenAndClass = {
  children: React.ReactNode;
  className?: string;
};
export type ClickAndClass = {
  onClick: () => void;
  className?: string;
};

export type OnClick = {
  onClick: () => void;
};

export type MovieTypes = {
  [x?: string]: { movieName?: string };
  _id: string;
  year?: number;
  image: string;
};

export type QuoteIdType = {
  quoteId: string;
};

export type MovieIdType = {
  movieId: string;
};

export type PostTypes = {
  quote: QuotesListTypes;
};

export type QuotesListTypes = {
  _id: string;
  comments: Comments[];
  image: string;
  likes: string[];
  movieId: MovieId;
  quoteEN: string;
  quoteGE: string;
  userId: string;
};

export type Comments = {
  _id: string;
  comment: string;
  userId: CommentUser;
};
export type CommentUser = {
  _id: string;
  username: string;
  profileImage: string;
};

export type MovieId = {
  _id: string;
  en: movieName;
  ge: movieName;
  year: number;
};

export type movieName = {
  movieName: string;
};

export type Liked = {
  liked: boolean;
};
