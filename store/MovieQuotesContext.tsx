import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const MovieQuotesContext = createContext({
  authModalState: false,
  changeRegistrationModalState: () => {},
});

export const MovieQuotesContextProvider: React.FC<Children> = (props) => {
  const [registrationModalState, setRegistrationModalState] = useState(false);

  const changeRegistrationModalState = (value: boolean) => {
    setRegistrationModalState(value);
  };

  const contextValue: ContextData = {
    authModalState: registrationModalState,
    changeRegistrationModalState: changeRegistrationModalState,
  };

  return (
    <MovieQuotesContext.Provider value={contextValue}>
      {props.children}
    </MovieQuotesContext.Provider>
  );
};
