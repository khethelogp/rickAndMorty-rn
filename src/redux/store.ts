import { rickAndMortyApi } from '@/lib'
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterReducer from './features/counterSlice'

const reducer = combineReducers({
  counter: counterReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
})

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), rickAndMortyApi.middleware]
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
