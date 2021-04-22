import {configureStore} from '@reduxjs/toolkit';
import brandSlice from "./feature/brandSlice";
import categorySlice from "./feature/categorySlice";
import orderSlice from "./feature/orderSlice";

export default configureStore({
    reducer: {
        brands: brandSlice,
        categories: categorySlice,
        orders: orderSlice
    },
});
