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
