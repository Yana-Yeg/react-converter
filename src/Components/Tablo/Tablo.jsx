import { useSelector } from "react-redux";
import { getCounterResult } from "../../redux/counterSelector";

const Tablo = () => {
  const counterResult = useSelector(getCounterResult);

  return <> {counterResult && counterResult.map((el) => `<p>${el}</p>`)}</>;
};

export default Tablo;
