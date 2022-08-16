export type ContextData = {
  token: string | null | undefined;
  userId: string | null | undefined;
  isLoggedIn: boolean;
  loginHandler: (userId: string, token: string) => void;
  logoutHandler: any;
  registrationModalState: boolean;
  changeRegistrationModalState: (_value: boolean) => void;
  loginModalState: boolean;
  changeLoginModalState: (_value: boolean) => void;
  passwordRecoveryState: boolean;
  changePasswordRecoveryState: (_value: boolean) => void;
  passwordUpdateState: boolean;
  changePasswordUpdateState: (_value: boolean) => void;
};

//change any

export type UserContextData = {
  userState: any;
  getUser: (data: any) => void;
};

export type MovieContextTypes = {
  movieCreationModal: boolean;
  movieCreationStateHandler: () => void;
  movieAdded: boolean;
  getMoviesRefresh: () => void;
  isMovieEdited: boolean;
  movieEditingStateHandler: (value: boolean) => void;
  movieState: any;
  getMovie: (data: any) => void;
};
