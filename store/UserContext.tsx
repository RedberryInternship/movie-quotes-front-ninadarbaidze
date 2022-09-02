/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer } from 'react';
import {
  Children,
  Data,
  MovieStateTypes,
  UserContextData,
  UserStateTypes,
} from 'types';

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
});

export const UserContextProvider: React.FC<Children> = (props) => {
  const [userState, dispatchUserAction] = useReducer(reducer, initialState);

  const getUser = (data: UserStateTypes) => {
    dispatchUserAction({
      type: 'ADD',
      payload: data,
    });
  };
  const contextValue: UserContextData = {
    userState,
    getUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
