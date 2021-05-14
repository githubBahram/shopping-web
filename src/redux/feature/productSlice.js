import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import categories from "../../data/categories";

const initialState = {
    page: 1,
    prev: 0,
    next: 3,
    isEndPage: false,
    productList: categories.slice(0, 6)
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state, action) {
            state.prev = state.prev + state.page * 3
            state.next = state.prev + 3
            console.log('product slicer:')
            console.log(state.prev)
            console.log(state.next)
            console.log(categories.length)

            console.log(current(state).productList)
            if (categories.length > state.next) {
                categories.slice(state.prev, state.next).map((item) => {
                    state.productList.push(item)
                })
            } else {
                state.isEndPage = true
                console.log('state ending')
                console.log(state.isEndPage)
            }

        }
    }
})
export const {addProducts} = productSlice.actions;
export default productSlice.reducer;