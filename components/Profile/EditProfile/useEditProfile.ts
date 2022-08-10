import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useEditProfile = () => {
  const { t } = useTranslation();
  const [updatePassword, setUpdatePassword] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  const imageChangeHandler = (imageUrl: string) => {
    setImagePreview(imageUrl);
  };

  return {
    t,
    updatePassword,
    setUpdatePassword,
    imagePreview,
    imageChangeHandler,
  };
};
