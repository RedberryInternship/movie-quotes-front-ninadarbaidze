import { useGoogleProfileForm } from './useGoogleProfileForm';
import { UpdatePassTypes } from './types';
import { Input, Button } from 'components';

const GoogleProfileForm: React.FC<UpdatePassTypes> = (props) => {
  const { imageChangeHandler } = props;
  const { t, formik, fileRef, changeHandler, editState, setEditState } =
    useGoogleProfileForm();

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        <p
          className='text-white text-center text-md z-50 pt-28 cursor-pointer'
          onClick={() => fileRef.current!.click()}
        >
          {t('profile:upload')}
        </p>
        <div className='flex justify-center gap-6  pt-6 px-[10%] pb-12 w-[100%]'>
          <div className='w-[30rem]'>
            <input
              type='file'
              name='image'
              ref={fileRef}
              accept='image/*'
              hidden
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeHandler(e, imageChangeHandler)
              }
            />
            <Input
              name={'username'}
              label={t('profile:username')}
              type={'text'}
              id={'username'}
              placeholder={t('profile:usernamePlaceholder')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isTouched={formik.touched.username}
              value={formik.values.username}
              errorMessage={formik.errors.username!}
              deleteInput={true}
              onClick={() => setEditState(true)}
            />

            <div className='w-full h-[1px] bg-gray20 bg-opacity-30 mt-4' />

            <Input
              id='email'
              name='email'
              type='email'
              label={t('home:loginInp1')}
              placeholder={t('home:emailPlaceholder')}
              value={formik.values.email}
              disabled={true}
            />
          </div>
          <p
            className='text-gray10 text-base mt-[4.5rem] cursor-pointer'
            onClick={() => setEditState(true)}
          >
            Edit
          </p>
        </div>

        {editState && (
          <div className='absolute left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-[calc(100%_-_10rem)]'>
            <Button
              text={t('profile:saveBtn')}
              className='bg-red hover:bg-redHover w-[10rem] mt-12 h-12 text-base'
            />
          </div>
        )}
      </form>
    </>
  );
};

export default GoogleProfileForm;
