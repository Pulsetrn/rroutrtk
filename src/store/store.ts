import { configureStore } from "@reduxjs/toolkit";
import { vansApi } from "./vans.api.ts";

export const store = configureStore({
  reducer: {
    [vansApi.reducerPath]: vansApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vansApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
