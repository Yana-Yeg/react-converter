import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetCurrent, fetchGetCount } from "../utils/someFetch";

export const getCurrentExchangeRate = createAsyncThunk(
  "/counter/getCurrentExchangeRate",
  async (symbol, thunkApi) => {
    try {
      // console.log("symbol", symbol);
      const data = await fetchGetCurrent(symbol);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCount = createAsyncThunk(
  "/counter/getCount",
  async (values, thunkApi) => {
    try {
      console.log("valuesOperations", values);
      const data = await fetchGetCount(values);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
