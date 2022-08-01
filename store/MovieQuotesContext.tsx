import React, { createContext, useState } from 'react';
import { Children, ContextData } from 'types';

export const MovieQuotesContext = createContext({
  authModalState: false,
  changeRegistrationModalState: () => {},
  popUpModalSuccess: false,
  popUpModalFailure: true,
  changePopupModalState: () => {},
});

export const MovieQuotesContextProvider: React.FC<Children> = (props) => {
  const [registrationModalState, setRegistrationModalState] = useState(false);
  const [popUpModalSuccess, setPopUpModalSuccess] = useState(false);
  const [popUpModalFailure, setPopUpModalFailure] = useState(true);

  const changeRegistrationModalState = (value: boolean) => {
    setRegistrationModalState(value);
  };

  const changePopupModalState = () => {
    setPopUpModalSuccess(true);
    setPopUpModalFailure(!popUpModalSuccess);
  };

  const contextValue: ContextData = {
    authModalState: registrationModalState,
    changeRegistrationModalState: changeRegistrationModalState,
    popUpModalSuccess: popUpModalSuccess,
    popUpModalFailure: popUpModalFailure,
    changePopupModalState: changePopupModalState,
  };

  return (
    <MovieQuotesContext.Provider value={contextValue}>
      {props.children}
    </MovieQuotesContext.Provider>
  );
};
