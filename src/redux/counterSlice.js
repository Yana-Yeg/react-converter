import { createSlice } from "@reduxjs/toolkit";
import { getCurrentExchangeRate, getCount } from "./counterOperations";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterResult: [],
    countRes: "",
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCurrentExchangeRate.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getCurrentExchangeRate.fulfilled]: (state, { payload }) => ({
      ...state,
      counterResult: payload,
      isLoading: false,
    }),
    [getCurrentExchangeRate.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [getCount.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getCount.fulfilled]: (state, { payload }) => ({
      ...state,
      countRes: payload,
      isLoading: false,
    }),
    [getCount.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export default counterSlice.reducer;
