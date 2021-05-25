import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {addBrand} from "../../api/brandApi";

const initialState = {
    brands: [{id: 1, name: 'کوکا'}, {id: 2, name: ' کاله'}, {id: 3, name: 'میرندا'}],
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
export const fetchBrandByCategory = createAsyncThunk('brands/fetchBrandByCategory', async () => {
    try {
        const brands = [1, 2, 3]
        return brands
    } catch (err) {
        console.log(err)
    }
})
export const saveBrand = createAsyncThunk('brands/addBrand', async (brand, {rejectWithValue}) => {
    try {
        return await addBrand(brand);
    } catch (err) {
        return rejectWithValue([], err);
    }
})

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBrands.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.brands = state.brands.concat(action.payload)
        },
        [fetchBrandByCategory.fulfilled]: (state, action) => {
            state.status = 'succeeded'
        }
    }
});


export const selectAllBrands = state => state.brands
export default brandsSlice.reducer;
