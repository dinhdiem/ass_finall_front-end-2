import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../../api/category";

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const { data } = await list();
    return data;
  }
);
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: any) => {
    const { data } = await remove(id);
    return data;
  }
);
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (category) => {
    const { data } = await create(category);
    return data;
  }
);
// export const updateCategory = createAsyncThunk(
//   "category/updateCategory",
//   async () => {
//     const { data } = await update();
//     return data;
//   }
// );
// export const readCategory = createAsyncThunk(
//   "category/readCategory",
//   async () => {
//     const { data } = await read();
//     return data;
//   }
// );

const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default categorySlice.reducer;
