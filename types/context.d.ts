export type ContextData = {
  token: string;
  userId: string;
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
