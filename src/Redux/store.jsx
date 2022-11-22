import { configureStore } from "@reduxjs/toolkit";
import musicStoreReducer from "./Reducers/AppSlice";
export const store = configureStore({
  reducer: { appstate: musicStoreReducer },
});
