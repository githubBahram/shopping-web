import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentCompany: {id: 1, name: ''},
    status: 'idle',
    error: null
};

const companySlice = createSlice({
    name: 'currentCompany',
    initialState,
    reducers: {},

});

export const selectCurrentCompany = state => state.currentCompany
export default companySlice.reducer