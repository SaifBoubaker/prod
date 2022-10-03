import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ formValue }, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const config = {
      headers: {
        Authorization: `Bearer ${user.user.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/products",
        formValue,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "prod",
  initialState: {},
  extraReducers: {
    [createProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.newProduct = action.payload;
      state.loading = false;
      state.appErr = undefined;
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action.payload.message;
    },
  },
});

export default productSlice.reducer;
