import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import themeSlice from "./slices/themeSlice";

export const appStore = configureStore({
    reducer: {
        theme : themeSlice,
        cart:cartSlice,
        products:productSlice,
    },
});