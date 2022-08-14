import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  listProducts,
  readProduct,
  update,
} from "../../api/Products";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const { data } = await listProducts();
  return data;
});
export const addProducts = createAsyncThunk(
  "product/addProducts",
  async (product: any) => {
    const { data } = await createProduct(product);
    return data;
  }
);
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (id: any) => {
    const { data } = await deleteProduct(id);
    return data;
  }
);
export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id: any) => {
    const { data } = await readProduct(id);
    return data;
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: any) => {
    const { data } = await update(product);
    return data;
  }
);
// export const getProductByCategory = createAsyncThunk(
//   "product/getProductByCategory",
//   async (category: any) => {
//     const { data } = await getP(category);
//     return data;
//   }
// );

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      const remove = state.value.filter((item: any) => item.id !== id);
      state.value = remove;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    // builder.addCase(getProductByCategory.fulfilled, (state, action) => {
    //   state.value = action.payload;
    // });
  },
});
export default ProductSlice.reducer;
