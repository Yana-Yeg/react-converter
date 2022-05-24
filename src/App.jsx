import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentExchangeRate } from "./redux/counterOperations";
import "./App.css";
import Tablo from "./Components/Tablo/Tablo";
import Exchange from "./Components/Exchange/Exchange";

export default function App() {
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    dispatch(getCurrentExchangeRate("EUR", "USD"));
  }, [dispatch]);

  return (
    <div>
      <h1>Current exchange rate for {today}</h1>
      <Tablo />
      <Exchange />
    </div>
  );
}
