export type ContextData = {
  token: string;
  userId: string;
  isLoggedIn: boolean;
  loginHandler: any;
  logoutHandler: any;
  registrationModalState: boolean;
  changeRegistrationModalState: any;
  loginModalState: boolean;
  changeLoginModalState: any;
  passwordRecoveryState: boolean;
  changePasswordRecoveryState: any;
  passwordUpdateState: boolean;
  changePasswordUpdateState: any;
};

export type UserContextData = {
  userState: any;
  getUser: (data: any) => void;
};
