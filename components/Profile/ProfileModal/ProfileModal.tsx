import { FeedBackdrop, Input } from 'components/shared';

import React from 'react';
import { Dialog } from '../Dialog';
import { ProfileModalTypes } from './types';
import { useProfileModal } from './useProfileModal';

const ProfileModal: React.FC<ProfileModalTypes> = (props) => {
  const { label, placeholder, name, title, setEmailList } = props;
  const { formik, t, userCtx } = useProfileModal({ setEmailList });
  return (
    <>
      <FeedBackdrop
        onClick={() => {
          userCtx.setFormModal(false);
          userCtx.setDialog(false);
        }}
      />
      <form onSubmit={formik.handleSubmit}>
        {userCtx.dialog && <Dialog />}
        {userCtx.formModal && !userCtx.dialog && (
          <div className='fixed overflow-auto  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-mainDark rounded-[12px]   z-40'>
            <div className=''>
              <div className='flex mb-2 border-b-[1px] border-gray15 border-opacity-20'>
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
                  className='px-40'
                />
                <div className='flex justify-end gap-4 items-center py-4'>
                  <p
                    className='text-gray10 cursor-pointer'
                    onClick={() => userCtx.setFormModal(false)}
                  >
                    Cancel
                  </p>
                  <button
                    type='button'
                    onClick={() => {
                      userCtx.setDialog(true);
                    }}
                    className='bg-red hover:bg-redHover text-white transition duration-300 font-helvetica_ge font-thin text-base rounded-[4px] px-2 py-1'
                  >
                    Add
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
