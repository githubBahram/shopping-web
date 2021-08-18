import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem("orders"));
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded(state, action) {
            const {id, count} = action.payload;

            const existOrder = state.find(order => order.id === id);

            if (existOrder) {
                existOrder.count = count;

            } else {
                state.push(action.payload);
            }
            localStorage.setItem("orders", JSON.stringify(state))
            console.log("state order....")
            console.log(JSON.parse(localStorage.getItem("orders")))
        },
        orderRemoved(state, action) {
            const {id, count} = action.payload;

            const existOrderRemove = state.find(order => order.id === id);

            if (existOrderRemove) {
                if (count === 1) {
                    let index = state.indexOf(existOrderRemove);
                    if (index > -1) {
                        state.splice(index, 1);
                    }
                } else {
                    existOrderRemove.count = count - 1;
                }
            }
            localStorage.setItem("orders", JSON.stringify(state))

            console.log("remove state order....")
            console.log(JSON.parse(localStorage.getItem("orders")))
        },
        orderRemovedAll(state) {
            console.log('removeAll')
            state = undefined
        }
    },
    prepare(id, name, image, amount, count) {
        return {
            payload: {
                id,
                name,
                image,
                amount,
                count,
            },
        };
    },
});
export const {orderAdded, orderRemoved, orderRemovedAll} = ordersSlice.actions;
export default ordersSlice.reducer;

