import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './task/tasksSlice'



export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
