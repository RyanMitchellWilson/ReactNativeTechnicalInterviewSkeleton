import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: true,
      thunk: true,
    }),
  reducer,
})

export default store
