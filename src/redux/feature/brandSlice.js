import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    brands: [],
    status: 'idle',
    error: null
};

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/brand-management/brands')
            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }
)
const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBrands.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.brands = state.brands.concat(action.payload)
        }
    }
});


export const selectAllBrands = state => state.brands
export default brandsSlice.reducer;
