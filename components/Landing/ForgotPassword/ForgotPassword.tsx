import { Backdrop, Modal, Input, Button, BackIcon } from 'components';
import { useForgotPassword } from './useForgotPassword';

const ForgotPassword = () => {
  const { formik, t, backToLoginHandler } = useForgotPassword();

  return (
    <>
      <Backdrop />
      <Modal className='w-full h-full sm:w-[35rem] sm:h-auto'>
        <div className='flex flex-col items-center mt-12'>
          <h1 className='text-white text-3xl font-bold mb-3'>
            {t('home:forgotH1')}
          </h1>
          <h2 className='text-gray font-normal text-sm text-center px-[17%]'>
            {t('home:fotgotH2')}
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
            text={t('home:forgotBtn')}
            className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
          />
        </form>
        <div
          className='flex justify-center items-center my-8 gap-3'
          onClick={backToLoginHandler}
        >
          <BackIcon />
          <p className='text-base text-gray cursor-pointer'>
            {t('home:forgotBack')}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPassword;
