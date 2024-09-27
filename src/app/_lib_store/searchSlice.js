import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    arrayValue : [],
}
const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchIncrementValues:(state,action)=>{
            const found = state.arrayValue.find((element)=>element==action.payload.name)
            if(found==undefined){
                state.arrayValue.unshift(action.payload.name)
            }
            if(state.arrayValue.length>5){
                state.arrayValue.pop()
            }
        },
    }
})
export const {searchIncrementValues} = searchSlice.actions
export default searchSlice.reducer