import { EmailListObjectTypes } from 'types';

export type UpdatePassTypes = {
  updatePassword: boolean;
  emailList: EmailListObjectTypes[];
  imageChangeHandler: (string) => void;
  setEmailList: () => void;
  // setUpdatePassword: (boolean) => void;
};

export type ProfileInfoTypes = {
  username: string;
  image: string;
  newPassword: string;
  repeatPassword: string;
};
