import { createSlice } from '@reduxjs/toolkit';

const userStore = createSlice({
    name: 'userStore',
    initialState: {
        userData: {}
    },
    reducers: {
        saveUser: (state, action) => {
            console.log('action',action)
            state.userData = action.payload.userData
        }
    }
});

export const { saveUser } = userStore.actions;
export default userStore;