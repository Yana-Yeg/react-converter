import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentExchangeRate } from "./redux/counterOperations";
import "./App.css";
import Tablo from "./Components/Tablo/Tablo";
import Exchange from "./Components/Exchange/Exchange";
import { getIsLoading } from "./redux/counterSelector";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    dispatch(getCurrentExchangeRate("EUR", "USD"));
  }, [dispatch]);

  return (
    <div>
      <h1>Current exchange rate for {today}</h1>
      {loading && <h2>Please wait. Loading...</h2>}
      <Tablo />
      <Exchange />
    </div>
  );
}
