import { EmailListObjectTypes } from 'types';

export type UpdatePassTypes = {
  updatePassword: boolean;
  emailList: EmailListObjectTypes[];
  imageChangeHandler: (string) => void;
  setEmailList: (prevState: EmailListObjectTypes[]) => void;
  // setUpdatePassword: (boolean) => void;
};

export type ProfileInfoTypes = {
  username: string;
  image: string;
  newPassword: string;
  repeatPassword: string;
};
