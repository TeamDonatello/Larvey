import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "./StateSlice"
import  searchReducer from "./searchSlice"
import cartReducer from "./CartSlice"
const Store = configureStore({
    reducer:{
     search : searchReducer ,
     counter :counterReducer,
     cart : cartReducer,
    }
})
 export { Store }