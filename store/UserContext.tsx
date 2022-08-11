import React, { createContext, useReducer } from 'react';
import { Children, UserContextData } from 'types';

const initialState = {
  username: '',
  email: '',
  profileImage: '',
};
const reducer = (state: any, action: { type: any; payload: any }) => {
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
  getUser: (data: any) => {},
});

export const UserContextProvider: React.FC<Children> = (props) => {
  const [userState, dispatchUserAction] = useReducer(reducer, initialState);

  const getUser = (data: any) => {
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
