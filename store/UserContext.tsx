/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer, useState } from 'react';
import {
  Children,
  Data,
  MovieStateTypes,
  UserContextData,
  UserStateTypes,
} from 'types';
import { bool } from 'yup';

const initialState = {
  username: '',
  profileImage: '',
  email: '',
  password: '',
};
const reducer = (
  state: any,
  action: { type: string; payload: UserStateTypes }
) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        ...action.payload,
      };
  }
};

export const UserContext = createContext({
  userState: initialState,
  getUser: (_data: UserStateTypes) => {},
  formModal: false,
  setFormModal: (arg0: boolean) => {},
  dialog: false,
  setDialog: (arg0: boolean) => {},
  editInputState: '',
  setEditInputState: (arg0: string) => {},
  successPopup: '',
  setSuccessPopup: (arg0: string) => {},
  errorPopup: '',
  setErrorPopup: (arg0: string) => {},
  emailSection: false,
  setEmailSection: (arg0: boolean) => {},
  passwordSection: false,
  setPasswordSection: (arg0: boolean) => {},
  editPassword: false,
  setEditPassword: (arg0: boolean) => {},
});

export const UserContextProvider: React.FC<Children> = (props) => {
  const [userState, dispatchUserAction] = useReducer(reducer, initialState);
  const [dialog, setDialog] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [editInputState, setEditInputState] = useState('');
  const [successPopup, setSuccessPopup] = useState('');
  const [errorPopup, setErrorPopup] = useState('');
  const [emailSection, setEmailSection] = useState(false);
  const [passwordSection, setPasswordSection] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const getUser = (data: UserStateTypes) => {
    dispatchUserAction({
      type: 'ADD',
      payload: data,
    });
  };

  const contextValue: UserContextData = {
    userState,
    getUser,
    formModal,
    setFormModal,
    dialog,
    setDialog,
    editInputState,
    setEditInputState,
    successPopup,
    setSuccessPopup,
    errorPopup,
    setErrorPopup,
    emailSection,
    setEmailSection,
    passwordSection,
    setPasswordSection,
    editPassword,
    setEditPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
