import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  objects: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
        const findExist = state.objects.find((element)=>element.product_id==action.payload.product_id)
        if(findExist == undefined){
            state.objects.push({
                product_name: `${action.payload.product_name}`,
                product_id: `${action.payload.product_id}`,
                supply_quantity: `${action.payload.supply_demand}`,
                supply_demand: `${action.payload.supply_demand}`,
                product_price: `${action.payload.product_price}`,
                product_image_url: `${action.payload.product_image_url}`,
            });
        }
        if(findExist!==undefined){
            state.objects.forEach((element)=>{
                if(element.product_id == action.payload.product_id){
                    element.supply_demand= Math.floor(element.supply_demand - 0)
                    element.supply_demand = element.supply_demand + 1
                }
            })
        }
    },
    addProductItems:(state,action)=>{
        state.objects.forEach((element)=>{
            if(element.product_id==action.payload.product_id){
                element.supply_demand= Math.floor(element.supply_demand - 0)
                element.supply_demand = element.supply_demand + 1
            }
        })
    },
    removeProductItems:(state,action)=>{
        state.objects.forEach((element)=>{
            if(element.product_id==action.payload.product_id){
                element.supply_demand= Math.floor(element.supply_demand - 0)
                if(element.supply_demand >0) {
                  element.supply_demand -= 1  
                }
                else {
                    element.supply_demand = 1 
                }                
                
            }
        })
    }
  },
});
export default cartSlice.reducer;
export const { addCartItems , addProductItems ,removeProductItems} = cartSlice.actions;
