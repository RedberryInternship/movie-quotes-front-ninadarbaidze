import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const AuthContext = createContext({
  token: '',
  userId: '',
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  registrationModalState: false,
  changeRegistrationModalState: () => {},
  loginModalState: false,
  changeLoginModalState: () => {},
  passwordRecoveryState: false,
  changePasswordRecoveryState: () => {},
  passwordUpdateState: false,
  changePasswordUpdateState: () => {},
});

const retrieveStoredValues = () => {
  let storedToken;
  let storedUser;
  if (typeof window !== 'undefined') {
    storedToken = localStorage.getItem('token');
    storedUser = localStorage.getItem('userId');
  }
  return { storedToken, storedUser };
};

export const AuthContextProvider: React.FC<Children> = (props) => {
  const storedData = retrieveStoredValues();
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [loginModalState, setloginModalState] = useState(false);
  const [passwordRecoveryState, setPasswordRecoveryState] = useState(false);
  const [passwordUpdateState, setPasswordUpdateState] = useState(false);

  let initialToken;
  if (storedData) {
    initialToken = storedData.storedToken;
  }

  const [token, setToken] = useState(initialToken) as any;
  const [user, setUser] = useState(storedData.storedUser) as any;

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    if (typeof window !== 'undefined') {
      setToken(null);
      localStorage.clear();
    }
  };

  const loginHandler = (token: string, userId: string) => {
    setToken(token);
    setUser(userId);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  };

  const changeRegistrationModalState = (value: boolean) => {
    setRegistrationModalState(value);
  };

  const changeLoginModalState = (value: boolean) => {
    setloginModalState(value);
  };

  const changePasswordRecoveryState = (value: boolean) => {
    setPasswordRecoveryState(value);
  };

  const changePasswordUpdateState = (value: boolean) => {
    setPasswordUpdateState(value);
  };

  const contextValue: ContextData = {
    token: token!,
    userId: user,
    isLoggedIn: userIsLoggedIn,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
    registrationModalState: registrationModalState,
    changeRegistrationModalState: changeRegistrationModalState,
    loginModalState: loginModalState,
    changeLoginModalState: changeLoginModalState,
    passwordRecoveryState: passwordRecoveryState,
    changePasswordRecoveryState: changePasswordRecoveryState,
    passwordUpdateState: passwordUpdateState,
    changePasswordUpdateState: changePasswordUpdateState,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
