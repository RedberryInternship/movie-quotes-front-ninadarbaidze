import { EmailListObjectTypes } from 'types';

export type EmailItemTypes = {
  email: string;
  primary: boolean;
  verified: boolean;
  setEmailList: (arg0: EmailListObjectTypes[]) => void;
};
