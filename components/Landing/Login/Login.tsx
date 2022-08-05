import {
  Modal,
  Backdrop,
  Input,
  Button,
  GoogleBtn,
  useLogin,
  Checkbox,
} from 'components';
import Link from 'next/link';

const Login = () => {
  const {
    formik,
    t,
    changeLoginState,
    changeSignUpState,
    changePasswordRecoveryState,
  } = useLogin();

  const handlePopupState = () => {
    changeLoginState(false);
    changeSignUpState(true);
  };

  const handlePasswordPopupState = () => {
    changeLoginState(false);
    changeSignUpState(false);
    changePasswordRecoveryState(true);
  };
  return (
    <>
      <Backdrop />
      <Modal className='w-full h-full sm:w-[35rem] sm:h-auto'>
        <div className='flex flex-col items-center mt-12'>
          <h1 className='text-white text-3xl font-bold mb-3'>
            Log in to your account
          </h1>
          <h2 className='text-gray font-normal text-base'>
            Welcome back! Please enter your details.
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col px-[17%]'>
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
          <div className='flex justify-between items-center mt-4'>
            <Checkbox
              name={'remember'}
              checked={formik.values.remember as any}
              onChange={formik.handleChange}
              text={'Remember me'}
            />
            <Link href={'/'}>
              <a
                className='link cursor-pointer'
                onClick={handlePasswordPopupState}
              >
                Forgot password
              </a>
            </Link>
          </div>

          <Button
            text='Sign in'
            className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
          />
          <GoogleBtn text='Sign in with Google' />
        </form>
        <div className='flex justify-center mt-4 mb-4 gap-3'>
          <p className='text-gray font-normal text-base'>
            Already have an account?
          </p>
          <p className='link cursor-pointer' onClick={handlePopupState}>
            Sign up
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Login;
