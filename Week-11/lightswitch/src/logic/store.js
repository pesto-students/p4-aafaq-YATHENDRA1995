// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import lightReducer from './reducer'

// export const store = createStore(lightReducer)
export const store = configureStore({
  reducer: {
    lightReducer: lightReducer,
  },
})