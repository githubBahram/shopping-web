import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {name: '', family: '', phoneNumber: '', token: ''},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addPhoneNumber(state, action) {
            const {phoneNumber} = action.payload;

            state.user.phoneNumber = phoneNumber
            console.log('phoneNumber')
            console.log( state.user.phoneNumber)
        }
    },

});
export const selectUser = state => state.user
export const {addPhoneNumber} = userSlice.actions;
export default userSlice.reducer;