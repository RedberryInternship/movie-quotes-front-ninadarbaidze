import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useEditProfile = () => {
  const { t } = useTranslation();
  const [updatePassword, setUpdatePassword] = useState(false);

  return { t, updatePassword, setUpdatePassword };
};
