import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [itemsPerRow, setItemsPerRow] = useState(5);

  return (
    <AppContext.Provider value={{ itemsPerRow, setItemsPerRow }}>
      {children}
    </AppContext.Provider>
  );
};
