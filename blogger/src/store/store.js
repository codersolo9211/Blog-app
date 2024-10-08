import {configureStore} from '@reduxjs/toolkit';
import authSlice from  './authSlice.js';

const store = configureStore({
    reducer: {
        // Add your reducers here
        auth : authSlice,
    }
});

export default store;