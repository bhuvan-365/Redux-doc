import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../src/features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
export default store;