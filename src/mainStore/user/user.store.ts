import { createSlice } from '@reduxjs/toolkit';

const userStore = createSlice({
    name: 'userStore',
    initialState: {
        userData: {},
        events: [],
        bookedAppointment: []
    },
    reducers: {
        saveUser: (state, action) => {
            console.log('action',action)
            state.userData = action.payload.userData
        },
        events: (state , action) => {
            state.events = action.payload.events
        },
        bookedAppointment:  (state , action) => {
            state.bookedAppointment = action.payload.bookedAppointment       
     }
    }
});

export const { saveUser , events , bookedAppointment } = userStore.actions;
export default userStore;