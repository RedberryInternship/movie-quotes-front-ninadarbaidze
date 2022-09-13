/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { CheckUserType, Children, ContextData, TokenDto } from 'types';
import jwt_decode from 'jwt-decode';
import { checkUser, getUserInfo } from 'services';
import { AxiosResponse } from 'axios';

export const AuthContext = createContext({
  token: '',
  userId: '',
  isLoggedIn: false,
  loginHandler: (_token: string, _userId: string) => {},
  logoutHandler: () => {},
  registrationModalState: false,
  changeRegistrationModalState: (_value: boolean) => {},
  loginModalState: false,
  changeLoginModalState: (_value: boolean) => {},
  passwordRecoveryState: false,
  changePasswordRecoveryState: (_value: boolean) => {},
  passwordUpdateState: false,
  changePasswordUpdateState: (_value: boolean) => {},
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

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(storedData.storedUser);

  let userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    if (typeof window !== 'undefined') {
      setToken(null);
      localStorage.clear();
      userIsLoggedIn;
    }
  }, [userIsLoggedIn]);

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    const getUser = async () => {
      if (userId) {
        try {
          await checkUser(userId as string);
        } catch (err: any) {
          err.response.status === 404 && logoutHandler();
        }
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        let token = localStorage.getItem('token') as string;
        let user = localStorage.getItem('userId') as string;
        let currentDate = new Date();
        try {
          let decodedToken: TokenDto = jwt_decode(token);
          if (decodedToken.exp * 1000 < currentDate.getTime()) {
            logoutHandler();
          } else {
            await getUserInfo(user, token);
          }
        } catch (err: any) {
          err.response &&
            err.response.data.message.includes('invalid') &&
            logoutHandler();
        }
      };
      getUser();
    }
  }, [logoutHandler]);

  const loginHandler = (token: string, userId: string) => {
    setToken(token);
    setUser(userId);
    localStorage.setItem('token', token) as string | null | undefined;
    localStorage.setItem('userId', userId) as string | null | undefined;
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
    userId: user!,
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
