"use client"
import React, { useContext} from 'react'
import { Provider } from 'react-redux'
import { Store } from '@/app/_lib_store/Store'

const StoreProvider = ({children}) => {
  return (
    <Provider store={Store}>
        {children}
    </Provider>
  )
}

export default StoreProvider