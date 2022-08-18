import {
  Modal,
  Backdrop,
  Input,
  Button,
  GoogleBtn,
  Checkbox,
} from 'components';
import Link from 'next/link';
import { useLogin } from './useLogin';

const Login = () => {
  const { formik, t, error, handlePopupState, handlePasswordPopupState } =
    useLogin();

  return (
    <>
      <Backdrop />
      <Modal className='w-full h-full sm:w-[35rem] sm:h-auto'>
        <div className='flex flex-col items-center mt-12'>
          <h1 className='text-white text-3xl font-bold mb-3'>
            {t('home:loginH1')}
          </h1>
          <h2 className='text-gray font-sm text-center text-base px-[17%]'>
            {t('home:loginH2')}
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col px-[17%]'>
          <Input
            id='user'
            name='user'
            type='text'
            label={t('home:user')}
            placeholder={t('home:userPlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.user}
            value={formik.values.user}
            errorMessage={formik.errors.user!}
            error={error}
            errorMsg={'invalid credentials'}
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
            error={error}
            errorMsg={'invalid credentials'}
          />
          <div className='flex justify-between items-center mt-8'>
            <Checkbox
              name={'remember'}
              checked={formik.values.remember as boolean}
              onChange={formik.handleChange}
              text={t('home:remember')}
            />
            <Link href={'/'}>
              <a
                className='link cursor-pointer'
                onClick={handlePasswordPopupState}
              >
                {t('home:forgotPass')}
              </a>
            </Link>
          </div>

          <Button
            text={t('home:loginBtn')}
            className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
          />
          <GoogleBtn text='Sign in with Google' />
        </form>
        <div className='flex justify-center mt-4 mb-4 gap-3'>
          <p className='text-gray font-normal text-base'>
            {t('home:loginFooter')}
          </p>
          <p className='link cursor-pointer' onClick={handlePopupState}>
            {t('home:loginFooter1')}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Login;
