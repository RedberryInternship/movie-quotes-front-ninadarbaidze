import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const AuthContext = createContext({
  registrationModalState: false,
  changeRegistrationModalState: () => {},
  loginModalState: false,
  changeLoginModalState: () => {},
});

export const AuthContextProvider: React.FC<Children> = (props) => {
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [loginModalState, setloginModalState] = useState(false);

  const changeRegistrationModalState = (value: boolean) => {
    setRegistrationModalState(value);
  };
  const changeLoginModalState = (value: boolean) => {
    setloginModalState(value);
  };

  const contextValue: ContextData = {
    registrationModalState: registrationModalState,
    changeRegistrationModalState: changeRegistrationModalState,
    loginModalState: loginModalState,
    changeLoginModalState: changeLoginModalState,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
