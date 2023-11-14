import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import userReducer from './user/slice'
import modalReducer from './modal/slice'
import nftsReducer from './nft/slice'
import themeReducer from './theme/slice'

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer, modal:modalReducer, nft:nftsReducer, theme:themeReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
