import { ObjectType } from "@/core/types/common";
import { DispatchType } from "../store";
import { UPDATE_STATE } from "../slices/appSlice";

export const __updateHandler = (mode: ObjectType) => async (dispatch: DispatchType) => {
  try {
    dispatch(UPDATE_STATE({ ...mode }));
  } catch (err) {
    console.log(err);
  }
};
