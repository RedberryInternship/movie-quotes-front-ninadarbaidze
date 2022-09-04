export type RegistrationTypes = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type ResponseToken = {
  token: string | string[] | undefined;
  userId?: string;
};

export type AuthGoogleTypes = {
  email: string | unknown;
  username: string | unknown;
};

export type PasswordRecoveryTypes = {
  email?: string;
  token?: setFieldValue;
  password?: string;
  repeatPassword?: string;
};

export type loginTypes = {
  user: string;
  password: string;
  remember?: boolean;
};
export type ModalTypes = {
  username?: string;
  email?: string;
};
