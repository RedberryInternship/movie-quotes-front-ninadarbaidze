import React, { useContext } from 'react';
import { Modal, Backdrop, Input, Button } from 'components';
import { MovieQuotesContext } from 'store';
import { useTranslation } from 'react-i18next';
import { useSignup, GoogleBtn } from 'components';

const SignUp = () => {
  const ctx = useContext(MovieQuotesContext);
  const { formik } = useSignup();
  const { t } = useTranslation();

  return (
    <>
      {ctx.authModalState && (
        <div>
          <Backdrop />
          <Modal className='w-full h-full sm:w-[35rem] sm:h-auto'>
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
                onBlur={formik.handleBlur}
                isTouched={formik.touched.username}
                value={formik.values.username}
                errorMessage={formik.errors.username!}
              />
              <Input
                id='email'
                name='email'
                type='email'
                label={t('home:inputEmail')}
                placeholder={t('home:emailPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isTouched={formik.touched.email}
                value={formik.values.email}
                errorMessage={formik.errors.email!}
              />
              <Input
                id='password'
                name='password'
                type='password'
                label={t('home:inputPassword')}
                placeholder={t('home:passwordPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isTouched={formik.touched.password}
                value={formik.values.password}
                errorMessage={formik.errors.password!}
              />
              <Input
                id='repPassword'
                name='repeatPassword'
                type='password'
                label={t('home:inputConfirmPass')}
                placeholder={t('home:confirmPassPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isTouched={formik.touched.repeatPassword}
                value={formik.values.repeatPassword}
                errorMessage={formik.errors.repeatPassword!}
              />
              <Button
                text={t('home:start')}
                className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
              />
              <GoogleBtn />
            </form>

            <div className='flex justify-center mt-4 mb-4 gap-3'>
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
