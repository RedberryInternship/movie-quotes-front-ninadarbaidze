import { Backdrop, Modal, Input, Button, useForgotPassword } from 'components';

const ForgotPassword = () => {
  const { formik, t } = useForgotPassword();
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

          <Button
            text='Sign in'
            className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
          />
        </form>
        <div className='flex justify-center mt-4 mb-4 gap-3' />
      </Modal>
    </>
  );
};

export default ForgotPassword;
