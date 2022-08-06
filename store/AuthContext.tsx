import React, { createContext, useState, useCallback, useEffect } from 'react';
import { Children, ContextData } from 'types';

export const AuthContext = createContext({
  token: '',
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

const calculateRemainingTime = (expirationTime: string | null) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime!).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider: React.FC<Children> = (props) => {
  const tokenData = retrieveStoredToken();
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [loginModalState, setloginModalState] = useState(false);
  const [passwordRecoveryState, setPasswordRecoveryState] = useState(false);
  const [passwordUpdateState, setPasswordUpdateState] = useState(false);

  let initialToken;
  let logoutTimer: any;

  if (tokenData) {
    initialToken = tokenData;
  }

  const [token, setToken] = useState(initialToken) as any;

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
