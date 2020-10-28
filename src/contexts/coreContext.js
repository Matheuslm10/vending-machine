import React, { useState, createContext } from 'react';

export const CoreContext = createContext();

export const CoreContextProvider = (props) => {
  const [stage, setStage] = useState('initialize');

  return (
    <CoreContext.Provider
      value={{
        stage,
        setStage
      }}
    >
      {props.children}
    </CoreContext.Provider>
  );
};
