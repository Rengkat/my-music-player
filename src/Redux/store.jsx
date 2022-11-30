import { configureStore } from "@reduxjs/toolkit";
import musicStoreReducer from "./Reducers/AppSlice";
import { shazamCoreApi } from "./api/Api";
export const store = configureStore({
  reducer: {
    appstate: musicStoreReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
