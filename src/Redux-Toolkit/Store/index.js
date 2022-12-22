import { configureStore } from "@reduxjs/toolkit";
import { routeAuthReducer } from "../Slices/routeSlice";
import { formReducer } from "../Slices/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    route: routeAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
