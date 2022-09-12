import { Input } from 'components/shared';

import React from 'react';
import { Dialog } from '../Dialog';
import { ProfileModalTypes } from './types';
import { useProfileModal } from './useProfileModal';

const ProfileModal: React.FC<ProfileModalTypes> = (props) => {
  const { label, placeholder, name, title, setEmailList, emailList } = props;
  const { formik, t, userCtx } = useProfileModal({ setEmailList, emailList });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {userCtx.dialog && <Dialog />}
        {userCtx.formModal && !userCtx.dialog && (
          <div className='absolute md:fixed w-full md:w-[27rem] h-36 md:h-64 top-24 md:top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-gray50 md:bg-mainDark rounded-[12px]  z-40'>
            <div className=''>
              <div className='hidden md:flex mb-2 border-b-[1px] border-gray15 border-opacity-20'>
                <h1 className='text-md px-8 py-4 text-left text-white font-helvetica_ge font-thin'>
                  {title}
                </h1>
              </div>
              <div className='px-8'>
                <Input
                  id={name}
                  name={name}
                  type='text'
                  label={label}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isTouched={
                    name === 'username'
                      ? formik.touched.username
                      : formik.touched.email
                  }
                  value={
                    name === 'username'
                      ? formik.values.username
                      : formik.values.email
                  }
                  errorMessage={
                    name === 'username'
                      ? formik.errors.username
                      : formik.errors.email
                  }
                />
                <div className='flex justify-between md:justify-end gap-4 items-center py-4 mt-8 md:mt-0'>
                  <p
                    className='text-gray10 cursor-pointer'
                    onClick={() => userCtx.setFormModal(false)}
                  >
                    {t('profile:cancel')}
                  </p>
                  <button
                    type='button'
                    onClick={() => {
                      userCtx.setDialog(true);
                    }}
                    className='bg-red hover:bg-redHover text-white transition duration-300 font-helvetica_ge font-thin text-base rounded-[4px] px-2 py-1'
                  >
                    {t('profile:add')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default ProfileModal;
