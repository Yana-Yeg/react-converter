import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../../redux/counterOperations";
import { getCountRes } from "../../redux/counterSelector";
import style from "./Exchange.module.css";

const Exchange = () => {
  const [optionFrom, setOptionFrom] = useState("");
  const [optionTo, setOptionTo] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const countRes = useSelector(getCountRes);
  const res = Object.values(countRes);
  const currency = Object.keys(countRes);
  const total = Math.round(quantity * res[0], -3);

  const handleChangeOptionFrom = (e) => {
    setOptionFrom(e.target.value);
  };

  const handleChangeOptionTo = (e) => {
    setOptionTo(e.target.value);
  };

  const handleChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { optionFrom, optionTo };
    dispatch(getCount(values));
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={style.common}>
          Choose currency from:
          <select name="" value={optionTo} onChange={handleChangeOptionTo}>
            <option value="default">----</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </label>

        <label htmlFor="" className={style.common}>
          amount :
          <input
            style={{ width: "50px" }}
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          ></input>
        </label>

        <label htmlFor="" className={style.common}>
          Choose currency to:
          <select name="" value={optionFrom} onChange={handleChangeOptionFrom}>
            <option value="default">----</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </label>
        <button type="submit" className={style.btn}>
          Count
        </button>
      </form>
      <div className={style.resWrap}>
        <div>Result :</div>
        {countRes && <div className={style.result}> {total} </div>}
        <div> {currency}</div>
      </div>
    </div>
  );
};

export default Exchange;
