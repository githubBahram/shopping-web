import {configureStore} from '@reduxjs/toolkit';
import brandSlice from "./feature/brandSlice";

export default configureStore({
    reducer: {
        brands:brandSlice
    },
});
