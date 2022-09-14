import { EmailListObjectTypes } from 'types';

export type EmailItemTypes = {
  email: string;
  primary: boolean;
  verified: boolean;
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
  setEmailEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteMail: (arg0: string) => void;
  onMakePrimary: (arg0: string) => void;
};
