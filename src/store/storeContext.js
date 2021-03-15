import React from 'react'
import { createStore } from './store'
import { useLocalObservable } from 'mobx-react-lite'

const StoreContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(createStore)

  return <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
}

export const useStore = () => React.useContext(StoreContext)