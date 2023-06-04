import {configureStore } from '@reduxjs/toolkit';
import userStore from './user/user.store';

const mainStore = configureStore({
    reducer:{
        user: userStore.reducer
    }
});
export default mainStore;