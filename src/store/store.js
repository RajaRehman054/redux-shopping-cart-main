import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import pracReducer from './pracSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        prac : pracReducer,
    },
});

export default store;
