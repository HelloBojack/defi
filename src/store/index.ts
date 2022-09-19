import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/wallet";
import { hedgeGraphApi } from "./apis/hedgeGraph";
import { providerApi } from "./apis/providerSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    [hedgeGraphApi.reducerPath]: hedgeGraphApi.reducer,
    [providerApi.reducerPath]: providerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true })
      .concat(hedgeGraphApi.middleware)
      .concat(providerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
