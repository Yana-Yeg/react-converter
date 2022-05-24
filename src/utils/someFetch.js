import axios from "axios";
const BASE_URL = "https://api.apilayer.com";
const API_KEY = "UZL513SXWudjJ2MA5yHr5Kiu6VlYNpLU";

export default async function fetchGetCurrent(symbol) {
  try {
    const response = await axios.get(
      `${BASE_URL}/exchangerates_data/latest?symbols=${symbol}&base=UAH&apikey=${API_KEY}`
    );
    console.log(response.data.rates);
    return response.data.rates;
  } catch (error) {
    console.error(error);
  }
}
