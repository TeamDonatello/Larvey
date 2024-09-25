import { configureStore } from "@reduxjs/toolkit"
import { counterReducer  } from "./StateSlice"

const Store = configureStore({
    reducer:{
     counter : counterReducer ,
    }
})
 export { Store }