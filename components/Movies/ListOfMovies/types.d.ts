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
};
