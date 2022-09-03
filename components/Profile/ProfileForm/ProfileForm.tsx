import { useProfileForm } from './useProfileForm';
import { UpdatePassTypes } from './types';
import { ProfileInput, Button } from 'components';

const ProfileForm: React.FC<UpdatePassTypes> = (props) => {
  const { updatePassword, setUpdatePassword, imageChangeHandler } = props;
  const {
    t,
    formik,
    fileRef,
    changeHandler,
    editPassword,
    setEditPassword,
    userCtx,
  } = useProfileForm();

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        <p
          className='text-white text-center text-md z-50 pt-28 cursor-pointer'
          onClick={() => fileRef.current!.click()}
        >
          {t('profile:upload')}
        </p>
        <div className='flex justify-center gap-6 pt-6 px-[5%] pb-12 w-[100%]'>
          <div className=''>
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
            <div className='flex justify-start gap-4 w-full'>
              <div>
                <ProfileInput
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
                  className='px-48'
                />
                <div className='w-full h-[1px] bg-gray20 bg-opacity-30 mt-4' />
              </div>

              <p className='text-gray10 text-sm mt-[4.5rem] cursor-pointer'>
                Edit
              </p>
            </div>

            <div className='flex justify-start gap-4 w-full '>
              <ProfileInput
                id='email'
                name='email'
                type='email'
                label={t('home:loginInp1')}
                placeholder={t('home:emailPlaceholder')}
                disabled={true}
                deleteInput={true}
                className='px-48'
              />
              <div className='flex items-center gap-2 mt-[4.5rem]'>
                <p className='text-gray10 text-sm  cursor-pointer'>
                  Make this primary
                </p>
                <div className='w-[1px] h-3 rounded-full bg-gray20' />

                <p className='text-gray10 text-sm cursor-pointer'>Remove</p>
              </div>
            </div>

            <div className='flex justify-start items-center gap-4 w-full'>
              <div>
                <div className='w-full h-[1px] bg-gray20 bg-opacity-30 mt-12' />

                <ProfileInput
                  id='password'
                  name='password'
                  type='password'
                  label={t('home:inputPassword')}
                  placeholder={t('home:passwordPlaceholder')}
                  value={userCtx.userState.password}
                  className='px-48'
                  disabled={true}
                  disablePassword={true}
                />
              </div>

              {!editPassword && (
                <p
                  className='text-gray10 text-sm mt-[5.5rem] cursor-pointer'
                  onClick={() => setEditPassword(true)}
                >
                  Edit
                </p>
              )}
            </div>

            {editPassword && (
              <>
                <div className='flex  w-full'>
                  <div className='flex flex-col justify-center gap-1  text-xs border-[1px] border-gray10 border-opacity-20 rounded py-4 pl-4 pr-56 h-full'>
                    <h4 className='text-sm text-white'>
                      Passwords should contain:
                    </h4>
                    <div className='flex items-center gap-1'>
                      <div
                        className={`rounded-full text-white w-1 h-1 ${
                          formik.errors.newPassword?.includes('8')
                            ? 'bg-gray25'
                            : 'bg-green'
                        } `}
                      />
                      <p
                        className={` text-white ${
                          formik.errors.newPassword?.includes('8')
                            ? 'text-gray25'
                            : 'text-white'
                        } `}
                      >
                        8 or more characters
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div
                        className={`rounded-full text-white w-1 h-1 ${
                          formik.errors.newPassword?.includes('15')
                            ? 'bg-gray25'
                            : 'bg-green'
                        } `}
                      />
                      <p
                        className={`${
                          formik.errors.newPassword?.includes('15')
                            ? 'text-gray25'
                            : 'text-white'
                        } `}
                      >
                        15 or less characters
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div
                        className={`rounded-full text-white w-1 h-1 ${
                          formik.errors.newPassword?.includes('valid')
                            ? 'bg-gray25'
                            : 'bg-green'
                        } `}
                      />
                      <p
                        className={`${
                          formik.errors.newPassword?.includes('valid')
                            ? 'text-gray25'
                            : 'text-white'
                        } `}
                      >
                        Lowercase letters and numbers
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div
                        className={`rounded-full text-white w-1 h-1 ${
                          formik.errors.repeatPassword?.includes('match')
                            ? 'bg-gray25'
                            : 'bg-green'
                        } `}
                      />
                      <p
                        className={`${
                          formik.errors.repeatPassword?.includes('match')
                            ? 'text-gray25'
                            : 'text-white'
                        } `}
                      >
                        Passwords should match
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start items-center gap-4 w-full'>
                  <div>
                    <ProfileInput
                      id='newPassword'
                      name='newPassword'
                      type='password'
                      label={t('home:New password')}
                      placeholder={t('home:New Password')}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isTouched={formik.touched.newPassword}
                      value={formik.values.newPassword}
                      errorMessage={formik.errors.newPassword!}
                      className='px-48'
                    />
                  </div>
                </div>

                <div className='flex justify-start items-center gap-4 w-full'>
                  <div>
                    <ProfileInput
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
                      className='px-48'
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='absolute left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-[calc(100%_-_10rem)]'>
          <Button
            text={t('profile:saveBtn')}
            className='bg-red hover:bg-redHover w-[10rem] mt-12 h-12 text-base'
          />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
