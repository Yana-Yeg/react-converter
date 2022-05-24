import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchGetCurrent from "../utils/someFetch";

export const getCurrentExchangeRate = createAsyncThunk(
  "/counter/getCurrentExchangeRate",
  async (symbol, thunkApi) => {
    try {
      console.log("symbol", symbol);
      const data = await fetchGetCurrent(symbol);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
