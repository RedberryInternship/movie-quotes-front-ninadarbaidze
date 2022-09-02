export type UpdatePassTypes = {
  updatePassword: boolean;
  setUpdatePassword: (boolean) => void;
  imageChangeHandler: (string) => void;
};

export type ProfileInfoTypes = {
  username: string;
  image: string;
  newPassword: string;
  repeatPassword: string;
};
