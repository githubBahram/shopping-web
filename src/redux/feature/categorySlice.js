import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    status: 'idle',
    error: null
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/category-management/categories')
            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }
)
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.categories = state.categories.concat(action.payload)
        }
    }
});


export const selectAllCategories = state => state.categories
export default categoriesSlice.reducer;
