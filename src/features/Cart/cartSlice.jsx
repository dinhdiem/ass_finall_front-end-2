import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const productInCart = state.products.find((p) => p.id === product.id);
      console.log(productInCart);
      if (productInCart && productInCart !== undefined) {
        productInCart.amount += 1;
        toast.success("Sản phẩm đã được cộng thêm vào giỏ hàng");
      } else {
        state.products.push({ ...product, amount: 1 });
        toast.success(`Sản phẩm ${product.name} đã được thêm vào giỏ hàng`);
      }
      state.quantity += 1;
      state.total = parseInt(product.salePrice) * state.quantity;
    },
    increase: (state, action) => {
      const product = action.payload;
      const productInCart = state.products.find((p) => p.id === product.id);
      if (productInCart) {
        productInCart.amount += 1;
      }
      state.quantity += 1;
      state.total += parseInt(product.salePrice) || product.price;
    },
    decrease: (state, action) => {
      const product = action.payload;
      const productInCart = state.products.find((p) => p.id === product.id);
      if (productInCart) {
        productInCart.amount -= 1;
        if (productInCart.amount === 0) {
          state.products = state.products.filter((p) => p.id !== product.id);
          toast.success(`Sản phẩm ${product.name} đã được xóa khỏi giỏ hàng`);
        }
      }
      state.quantity -= 1;
      state.total -= parseInt(product.salePrice) || product.price;
    },
    remove: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter((item) => item.id !== product.id);
      state.quantity = state.quantity - product.amount;
      state.total -=
        product.amount * product.salePrice || product.price * product.amount;
      toast.success(`Sản phẩm ${product.name} đã được xóa khỏi giỏ hàng`);
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset, increase, decrease, remove } =
  cartSlice.actions;
export default cartSlice.reducer;
