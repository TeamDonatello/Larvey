import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./StateSlice";
const initialState = {
    objects:[{
        product_name : '',
        product_id :'',
        product_price: '',
        product_quantity:'',
        product_img_link : "",
    }]
}
const createCart = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        increment : (state,action)=>{
        
        },
        

    }
})