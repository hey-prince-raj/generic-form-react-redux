import { createSlice } from "@reduxjs/toolkit";
const routeSlice = createSlice({
  name: "route",
  initialState: {
    preview: false,
    success: false
  },
  reducers: {
    setRouteAuthValue: (state, action) => {
      const [name, value] = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
  }
});
export const routeAuthReducer = routeSlice.reducer;
export const { setRouteAuthValue } = routeSlice.actions;
