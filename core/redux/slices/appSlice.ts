import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectType } from "@/core/types/common";
import { TestInitialStateType } from "./slices";

const initialState: TestInitialStateType = {
  name: null,
  age: null,
  location: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    UPDATE_STATE: (state, action: PayloadAction<ObjectType>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { UPDATE_STATE } = appSlice.actions;
export default appSlice.reducer;
