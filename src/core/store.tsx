import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction, thunk } from 'redux-thunk'
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseAPI } from '../services/BaseAPI';


export const store = configureStore({
    reducer: {
        [baseAPI.reducerPath]: baseAPI.reducer
    },
    middleware: defaultMiddleware => defaultMiddleware().concat([thunk, baseAPI.middleware])
})


setupListeners(store.dispatch)
// Infer the type of makeStore
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;