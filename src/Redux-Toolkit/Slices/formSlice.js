import { createSlice } from "@reduxjs/toolkit";
import { formValuesSchema } from "../../FormComponent/FormModal";
const formSlice = createSlice({
  name: "form",
  initialState: formValuesSchema,
  reducers: {
    setFormValue: (state, action) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: { ...state[name], value }
      };
    }
  }
});
export const formReducer = formSlice.reducer;
export const { setFormValue } = formSlice.actions;
