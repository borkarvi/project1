import { createSlice } from "@reduxjs/toolkit";

const calendarStore = createSlice({
    name: 'calendarStore',
    initialState: {
        events: []
    },
    reducers: {
        saveEvents: (state,action) => {
            state.events = action.payload.userEvent;
        }
    }
});

export const {saveEvents } = calendarStore.actions;

export default calendarStore;