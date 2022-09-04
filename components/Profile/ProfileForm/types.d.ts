import { EmailListObjectTypes } from 'types';

export type ProfileFormTypes = {
  updatePassword: boolean;
  emailList: EmailListObjectTypes[];
  imageChangeHandler: (string) => void;
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
};

export type ProfileInfoTypes = {
  username: string;
  image: string;
  newPassword: string;
  repeatPassword: string;
};
