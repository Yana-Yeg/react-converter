import { useSelector } from "react-redux";
import { getCounterResult } from "../../redux/counterSelector";

const Tablo = () => {
  const counterResult = useSelector(getCounterResult);
  const arrKeys = Object.keys(counterResult);
  const arrValues = Object.values(counterResult);
  const arrUSD = [arrKeys[0], arrValues[0]];
  const arrEUR = [arrKeys[1], arrValues[1]];

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <h2>{arrUSD[0]}</h2>
        <p>{arrUSD[1]}</p>
      </div>
      <div>
        <h2>{arrEUR[0]}</h2>
        <p>{arrEUR[1]}</p>
      </div>
    </div>
  );
};

export default Tablo;
