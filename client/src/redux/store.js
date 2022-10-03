import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice.js";
import ProdcutReducer from "./features/productSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProdcutReducer,
  },
});
