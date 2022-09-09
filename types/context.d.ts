export type ContextData = {
  token: string;
  userId: string;
  isLoggedIn: boolean;
  loginHandler: (userId: string, token: string) => void;
  logoutHandler: () => void;
  registrationModalState: boolean;
  changeRegistrationModalState: (_value: boolean) => void;
  loginModalState: boolean;
  changeLoginModalState: (_value: boolean) => void;
  passwordRecoveryState: boolean;
  changePasswordRecoveryState: (_value: boolean) => void;
  passwordUpdateState: boolean;
  changePasswordUpdateState: (_value: boolean) => void;
};

export type UserContextData = {
  userState: UserStateTypes;
  getUser: (data: UserStateTypes) => void;
  formModal: boolean;
  setFormModal: (arg0: boolean) => void;
  dialog: boolean;
  setDialog: (arg0: boolean) => void;
  editInputState: string;
  setEditInputState: (arg0: string) => void;
  successPopup: string;
  setSuccessPopup: (arg0: string) => void;
  errorPopup: string;
  setErrorPopup: (arg0: string) => void;
  emailSection: boolean;
  setEmailSection: (arg0: boolean) => void;
  passwordSection: boolean;
  setPasswordSection: (arg0: boolean) => void;
  editPassword: boolean;
  setEditPassword: (arg0: boolean) => void;
  loader: boolean;
  setLoader: (arg0: boolean) => void;
};

export type UserStateTypes = {
  username: string;
  email: string;
  profileImage: string;
  password: string;
};

export type MovieContextTypes = {
  movieCreationModal: boolean;
  movieCreationStateHandler: () => void;
  movieAdded: boolean;
  getMoviesRefresh: () => void;
  isMovieEdited: boolean;
  movieEditingStateHandler: (value: boolean) => void;
  movieState: MovieStateTypes;
  getMovie: (data: MovieStateTypes) => void;
};

export type QuoteContextTypes = {
  quoteCreationModal: boolean;
  quoteCreationStateHandler: () => void;
  isMovieQuote: boolean;
  movieQuoteCreationHandler: () => void;
  quoteState: QuoteStateTypes;
  getQuote: (data: QuoteStateTypes) => void;
  editQuoteModal: boolean;
  editQuoteHandler: (arg0: boolean) => void;
  refreshQuotes: boolean;
  refreshQuotesHandler: () => void;
  notificationState: boolean;
  notificationStateHandler: (arg0: boolean) => void;
};

export type MovieStateTypes = {
  en: MovieInfo;
  ge: MovieInfo;
  budget: number;
  year: number;
  genres: string[];
  userId: string;
  image: string;
  quotes: QuotesTypes[];
};

export type QuoteStateTypes = {
  quoteEN: string;
  quoteGE: string;
  image: string;
  movieId: string;
  userId: string;
  _id: string;
};

export type MovieInfo = {
  movieName: string;
  director: string;
  description: string;
};

export type Data = {
  data?: DataTypes;
};

export type DataTypes = {
  name: string;
  director: string;
  description: string;
  year: number;
  budget: number;
  image: string;
  en: MovieInfo;
  ge: MovieInfo;
  genres: string[] | any;
  userId: string | any;
  quotes: QuotesTypes[];
};

export type QuotesTypes = {
  quoteEN: string;
  quoteGE: string;
  image: string;
  userId?: string;
  movieId?: string;
  likes: string[];
  comments: Comments[];
  _id: string;
  setViewQuote?: (value: boolean) => void;
};

export type TokenDto = {
  userId: string;
  exp: number;
  iat: number;
};
