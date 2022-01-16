import {configureStore} from '@reduxjs/toolkit'
import user  from './slices/users';
export default configureStore({
    reducer: {
        user
    }
});
