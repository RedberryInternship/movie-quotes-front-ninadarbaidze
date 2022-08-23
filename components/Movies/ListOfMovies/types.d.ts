export type MovieTypes = {
  [x?: string]: { movieName?: string };
  _id: string;
  year?: number;
  image: string;
};

export type UpdatedMovieTypes = {
  [x?: string]: { movieName?: string };
  movieName?: string;
  id: string;
  year: number;
  image: string;
  quotes?: QuotesTypes[];
};

export type QuotesTypes = {
  quoteEN: string;
  quoteGE: string;
  image: string;
  userId?: string;
  movieId?: string;
  _id?: string;
};
