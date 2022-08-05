import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const AuthContext = createContext({
  registrationModalState: false,
  changeRegistrationModalState: () => {},
  loginModalState: false,
  changeLoginModalState: () => {},
  passwordRecoveryState: false,
  changePasswordRecoveryState: () => {},
  passwordUpdateState: false,
  changePasswordUpdateState: () => {},
});

export const AuthContextProvider: React.FC<Children> = (props) => {
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [loginModalState, setloginModalState] = useState(false);
  const [passwordRecoveryState, setPasswordRecoveryState] = useState(false);
  const [passwordUpdateState, setPasswordUpdateState] = useState(false);

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
