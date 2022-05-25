import axios from "axios";
const BASE_URL = "https://api.apilayer.com";
const API_KEY = "RUpWPJfW8D70iZG1Ae1Ic5M9rCCEY2Nn";

export async function fetchGetCurrent(symbol) {
  try {
    const response = await axios.get(
      `${BASE_URL}/exchangerates_data/latest?symbols=USD%2C%20EUR&base=UAH&apikey=${API_KEY}`
    );
    // console.log(response.data.rates);
    return response.data.rates;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGetCount(values) {
  try {
    const { optionFrom, optionTo } = values;
    const response = await axios.get(
      `${BASE_URL}/exchangerates_data/latest?symbols=${optionFrom}&base=${optionTo}&apikey=${API_KEY}`
    );
    console.log(response.data.rates);
    return response.data.rates;
  } catch (error) {
    console.error(error);
  }
}
