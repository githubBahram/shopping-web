import {configureStore} from '@reduxjs/toolkit';
import brandSlice from "./feature/brandSlice";
import categorySlice from "./feature/categorySlice";
import orderSlice from "./feature/orderSlice";
import productSlice from "./feature/productSlice";

export default configureStore({
    reducer: {
        brands: brandSlice,
        categories: categorySlice,
        orders: orderSlice,
        products: productSlice
    },
});
