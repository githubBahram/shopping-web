import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    drawPanel: {show: false},
};

const drawPanelSlice = createSlice({
    name: 'drawPanel',
    initialState,
    reducers: {
        openDrawPanel(state, action) {
            console.log("open draw panel")
            state.drawPanel.show = true
        },
        closeDrawPanel(state,action){
            state.drawPanel.show = false
        }
    },

});

export const selectShowState = state => state.drawPanel
export const {openDrawPanel,closeDrawPanel} = drawPanelSlice.actions;
export default drawPanelSlice.reducer;