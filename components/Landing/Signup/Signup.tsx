import React, { useContext } from 'react';
import { Modal, Backdrop, Input, Button } from 'components';
import { MovieQuotesContext } from 'store';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { RegistrationSchema } from 'schema';
import { signup } from 'services';
import { useRouter } from 'next/router';

const SignUp = () => {
  const ctx = useContext(MovieQuotesContext);
  const router = useRouter();
  const { t } = useTranslation();
  const onSubmit = async (values: any) => {
    try {
      await signup(values);
      router.push('/?modal=email-sent');
      ctx.changeRegistrationModalState(false);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: onSubmit,
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
