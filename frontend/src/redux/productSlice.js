import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'



const productSlice = createSlice({
 name: 'product',
 initialState: null,
 reducers: {
      deleteProduct: (state, action) => {

        let filteredArray = state.filter(element => element.id === action.id ? false : true)
        return filteredArray;

      },
      editProduct: (state, action) => {

        let editedArray = state.map(element =>  element.id === action.editedObj.id ? action.editedObj : element) 
        return editedArray





      },
      addProduct: (state) => {

        // creates new empty object
        let newProduct = {
          id: uuidv4(),
          title: "",
          publisher: "", 
          genre: "",
          price: 0    
        }
      // inserts object into the index=0 of the state array
      let addArray = [
          newProduct,
          ...state
      ];
      return addArray // return to useReducer, which sets the state





      },
      getProducts: (state, action) => {


        state = action.payload


      



      },
      addStore: (state, action) => {

        let payloadArr = action.payload.map(element => {
          return {
                  id: element.id,
                  title: element.gameTitle,
                  publisher: element.publisherName,
                  genre: element.genre,
                  price: element.MSRP
                  }
      })
      // console.log(payloadArr)
      return [...payloadArr, ...state]

      },

   
 },
});


export const {deleteProduct,editProduct,addProduct, getProducts, addStore    } = productSlice.actions;
export default productSlice.reducer;
