import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appSlice from "./slices/appSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    app: appSlice,
  },
});

export type RTKStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<DispatchType>();

export default store;
