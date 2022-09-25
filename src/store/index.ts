import { configureStore } from "@reduxjs/toolkit";
import { hedgeGraphApi } from "./apis/hedgeGraph";
import { uniswapGraphApi } from "./apis/uniswapGraph";

export const store = configureStore({
  reducer: {
    [hedgeGraphApi.reducerPath]: hedgeGraphApi.reducer,
    [uniswapGraphApi.reducerPath]: uniswapGraphApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(
      hedgeGraphApi.middleware,
      uniswapGraphApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
