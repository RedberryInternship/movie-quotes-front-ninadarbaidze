export type CommentRequest = {
  comment: string;
  userId: string;
  quoteId: string;
};

export type LikeRequest = {
  userId: string;
  quoteId: string;
};
