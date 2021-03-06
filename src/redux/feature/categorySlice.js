import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {addCategory, getAllMainCategory} from "../../api/categoryApi";

const initialState = {
    categories: [],
    status: 'idle',
    error: null
};
export const saveCategory = createAsyncThunk('categories/addCategory', async (category, {rejectWithValue}) => {
    try {
        return await addCategory(category);
    } catch (err) {
        return rejectWithValue([], err);
    }
})

export const fetchMainCategories = createAsyncThunk('categories/getAllMainCategory', async () => {
    try {
        console.log("fetch All Main category")
        return await getAllMainCategory()
    } catch (err) {
        throw 'network error'
    }
})


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMainCategories.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            console.log('fulfilled categories')
            console.log(action.payload)
            state.categories = state.categories.concat(action.payload)
        },
        [fetchMainCategories.rejected]: (state, action) => {
            state.status = 'reject'
            console.log('reject')
        }
    }
});


export const selectAllCategories = state => state.categories
export default categoriesSlice.reducer;
