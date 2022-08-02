export type RegistrationTypes = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type VerifyAccountTypes = {
  token: string | string[] | undefined;
};

export type authGoogleTypes = {
  email: string | unknown;
  username: string | unknown;
};
