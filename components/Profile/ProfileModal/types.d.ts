export type ProfileModalTypes = {
  label: string;
  placeholder: string;
  name: string;
  title: string;
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
  emailList: EmailListObjectTypes[];
};
