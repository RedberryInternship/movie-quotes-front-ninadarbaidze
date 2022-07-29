import React, { useContext } from 'react';
import { Modal, Backdrop, Input, Button } from 'components';
import { MovieQuotesContext } from 'store';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { RegistrationSchema } from 'schema';

const SignUp = () => {
  const ctx = useContext(MovieQuotesContext);
  const { t } = useTranslation();
  const onSubmit = () => {};

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit,
    validationSchema: RegistrationSchema,
  });
  return (
    <>
      {ctx.authModalState && (
        <div>
          <Backdrop />
          <Modal>
            <div className='flex flex-col items-center mt-12'>
              <h1 className='text-white text-3xl font-bold mb-3'>
                {t('home:createAccount')}
              </h1>
              <h2 className='text-gray font-normal text-base'>
                {t('home:startJourney')}
              </h2>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className='flex flex-col px-[17%]'
            >
              <Input
                id='username'
                name='username'
                type='text'
                label={t('home:inputName')}
                placeholder={t('home:namePlaceholder')}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <Input
                id='email'
                name='email'
                type='email'
                label={t('home:inputEmail')}
                placeholder={t('home:emailPlaceholder')}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <Input
                id='password'
                name='password'
                type='text'
                label={t('home:inputPassword')}
                placeholder={t('home:passwordPlaceholder')}
                onChange={formik.handleChange}
                value={formik.values.username}
                showHidePassword={true}
              />
              <Input
                id='password'
                name='password'
                type='text'
                label={t('home:inputConfirmPass')}
                placeholder={t('home:confirmPassPlaceholder')}
                onChange={formik.handleChange}
                value={formik.values.username}
                showHidePassword={true}
              />
              <Button
                text={t('home:start')}
                className='bg-red hover:bg-redHover w-[100%] mt-4 h-12 text-base'
              />
            </form>
            <div className='flex justify-center mt-4 gap-3'>
              <p className='text-gray font-normal text-base'>
                Already have an account?
              </p>
              <p className=' cursor-pointer text-link underline'>Log in</p>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default SignUp;
