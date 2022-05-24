import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentExchangeRate } from "./redux/counterOperations";
import { getCounterResult, getIsLoading } from "./redux/counterSelector";
import "./App.css";
import Tablo from "./Components/Tablo/Tablo";

export default function App() {
  const dispatch = useDispatch();
  // const counterResult = useSelector(getCounterResult);
  const isLoading = useSelector(getIsLoading);

  // useEffect(() => {
  //   dispatch(getCurrentExchangeRate("EUR"));
  // }, [dispatch, counterResult]);

  return (
    <div>
      <p>Current exchange rate</p>
      <button
        type="button"
        onClick={() => dispatch(getCurrentExchangeRate("EUR"))}
      >
        Uploap Current Exchange Rate
      </button>

      <Tablo />
    </div>
  );
}
