import {configureStore} from '@reduxjs/toolkit';
import brandSlice from "./feature/brandSlice";
import categorySlice from "./feature/categorySlice";
import orderSlice from "./feature/orderSlice";
import productSlice from "./feature/productSlice";
import userSlice from "./feature/userSlice";

export default configureStore({
    reducer: {
        brands: brandSlice,
        categories: categorySlice,
        orders: orderSlice,
        products: productSlice,
        user: userSlice
    },
});
