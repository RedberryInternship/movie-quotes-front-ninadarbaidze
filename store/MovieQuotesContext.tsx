import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const MovieQuotesContext = createContext({
  authModalState: false,
  changeRegistrationModalState: () => {},
  loginModalState: false,
  changeLoginModalState: () => {},
});

export const MovieQuotesContextProvider: React.FC<Children> = (props) => {
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [loginModalState, setloginModalState] = useState(false);

  const changeRegistrationModalState = (value: boolean) => {
    setRegistrationModalState(value);
  };
  const changeLoginModalState = (value: boolean) => {
    setloginModalState(value);
  };

  const contextValue: ContextData = {
    authModalState: registrationModalState,
    changeRegistrationModalState: changeRegistrationModalState,
    loginModalState: loginModalState,
    changeLoginModalState: changeLoginModalState,
  };

  return (
    <MovieQuotesContext.Provider value={contextValue}>
      {props.children}
    </MovieQuotesContext.Provider>
  );
};
