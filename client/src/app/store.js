import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';




const persistConfig = {
  key:`root`,
  storage
}

const reducers = combineReducers({
  user:userSlice
})

const persistedReducer = persistReducer(persistConfig,reducers)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export {store,persistor}