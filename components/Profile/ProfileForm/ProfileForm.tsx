import React from 'react';
import { useProfileForm } from './useProfileForm';
import { UpdatePassTypes } from './types';
import { Input, Button } from 'components';

const ProfileForm: React.FC<UpdatePassTypes> = (props) => {
  const { updatePassword, setUpdatePassword } = props;
  const { t, formik } = useProfileForm();

  return (
    <>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className='pt-24 px-[20%] pb-12 w-full'>
          <Input
            name={'username'}
            label={'Username'}
            type={'text'}
            id={'username'}
            placeholder={'Username'}
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
            label='Email'
            placeholder='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.email}
            value={formik.values.email}
            errorMessage={formik.errors.email!}
          />
          {!updatePassword && (
            <a
              className='link cursor-pointer'
              onClick={() => setUpdatePassword(true)}
            >
              {t('home:forgotPass')}
            </a>
          )}
          {updatePassword && (
            <>
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
            </>
          )}
        </div>
        <div className='absolute left-[calc(100%_-_10rem)]'>
          <Button
            text='save changes'
            className='bg-red hover:bg-redHover w-[10rem] mt-12 h-12 text-base'
          />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
