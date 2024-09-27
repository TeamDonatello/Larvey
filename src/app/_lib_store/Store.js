import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "./StateSlice"
import  searchReducer from "./searchSlice"

const Store = configureStore({
    reducer:{
     search : searchReducer ,
     counter :counterReducer,
    }
})
 export { Store }