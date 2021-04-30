import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import categories from "../../data/categories";

const initialState = {
    page: 1,
    prev: 0,
    next: 4,
    isEndPage: false,
    productList: categories.slice(0, 4)
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state, action) {
            state.prev = state.prev + state.page * 4
            state.next = state.prev + 4
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