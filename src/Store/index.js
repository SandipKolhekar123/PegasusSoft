import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './students';


export default configureStore({
  reducer: {
    studentR: studentReducer,
  },
})