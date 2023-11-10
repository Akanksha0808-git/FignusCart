import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";


const store = configureStore({
  reducer: {
    cart: Slice,
  },
});
export default store;