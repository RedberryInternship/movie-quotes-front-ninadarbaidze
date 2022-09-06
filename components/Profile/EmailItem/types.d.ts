import { EmailListObjectTypes } from 'types';

export type EmailItemTypes = {
  email: string;
  primary: boolean;
  verified: boolean;
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
  onDeleteMail: (arg0: string) => void;
  onMakePrimary: (arg0: string) => void;
};
