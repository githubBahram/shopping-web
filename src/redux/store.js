import {configureStore} from '@reduxjs/toolkit';
import brandSlice from "./feature/brandSlice";
import categorySlice from "./feature/categorySlice";

export default configureStore({
    reducer: {
        brands:brandSlice,
        categories:categorySlice
    },
});
