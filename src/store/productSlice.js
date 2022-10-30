const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// Thunks
export const fetchProducts = createAsyncThunk("products/fetch", async (id) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  if (id === undefined) return data;
  else {
    const final_data = data.filter((item) => !id.includes(item.id));
    return final_data;
  }
});

export default productSlice.reducer;
