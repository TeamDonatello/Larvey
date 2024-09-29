import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  objects: [
    {
      product_name: "",
      product_id: "",
      product_price: "",
      product_quantity: "",
      product_img_link: "",
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const found = state.objects.find(
        (element) => element.product_id == action.payload.product_id
      );
      if (found == undefined) {
        state.objects.unshift({
          product_id,
          product_name,
          product_price,
          product_quantity,
          product_img_link,
        });
      }
      if (found !== undefined) {
        state.objects.forEach((element, index) => {
          if (element.product_id == action.payload.product_id) {
            state.objects[index].product_id += 1;
          }
        });
      }
    },
  },
});
export default cartSlice.reducer
export const {addCartItems} = cartSlice.actions 