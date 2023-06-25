import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';


const store = configureStore({
 reducer: {
   product: productReducer,  //key is name of redux state, value is the exported reducer
 },
});


export default store;