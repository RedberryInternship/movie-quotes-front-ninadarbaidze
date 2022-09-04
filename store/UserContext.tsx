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
});

export const UserContextProvider: React.FC<Children> = (props) => {
  const [userState, dispatchUserAction] = useReducer(reducer, initialState);
  const [dialog, setDialog] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [editInputState, setEditInputState] = useState('');

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
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
