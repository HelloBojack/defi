import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/wallet";
import { hedgeGraphApi } from "./apis/hedgeGraph";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    [hedgeGraphApi.reducerPath]: hedgeGraphApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(hedgeGraphApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
