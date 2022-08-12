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

export type UserContextData = {
  userState: any;
  getUser: (data: any) => void;
};

export type MovieContextTypes = {
  movieCreationModal: boolean;
  MovieCreationStateHandler: (_value: boolean) => void;
};
