import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice'
const store = configureStore({
  reducer: {
    counter : counterReducer
  },
})

export default store;