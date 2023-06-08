import {configureStore } from '@reduxjs/toolkit';
import userStore from './user/user.store';
import calendarstore from './calendar/calendar-store';

const mainStore = configureStore({
    reducer:{
        user: userStore.reducer,
        calendar: calendarstore.reducer
    }
});
export default mainStore;