import React, { useState } from 'react';

const initialState = {
  count: 0
}

export const Context = React.createContext();

const Store = ({children}) => {
  const [inState, inSetState] = useState(initialState);
  
  return (
    <Context.Provider value={[inState, inSetState]}>{children}</Context.Provider>
  )
}
export default Store;