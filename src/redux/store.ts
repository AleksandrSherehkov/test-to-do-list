import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './task/tasksSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'], 
}


const persistedReducer = persistReducer(persistConfig, tasksReducer)


export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
