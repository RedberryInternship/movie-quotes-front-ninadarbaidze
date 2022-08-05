import { Backdrop, Modal, Input, Button, useUpdatePassword } from 'components';

const UpdatePassword = () => {
  const { formik, t } = useUpdatePassword();
  return (
    <>
      <Backdrop />
      <Modal className='w-full h-full sm:w-[35rem] sm:h-auto'>
        <div className='flex flex-col items-center mt-12'>
          <h1 className='text-white text-3xl font-bold mb-3'>
            Create new password
          </h1>
          <h2 className='text-gray font-normal text-base px-[17%]'>
            Your new password must be different from previous used passwords
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col px-[17%]'>
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
            text='Reset password'
            className='bg-red hover:bg-redHover w-[100%] mt-6 h-12 text-base'
          />
        </form>
        <div className='flex justify-center mt-4 mb-4 gap-3' />
      </Modal>
    </>
  );
};

export default UpdatePassword;
