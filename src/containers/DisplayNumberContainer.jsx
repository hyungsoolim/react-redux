import DisplayNumber from "../components/DisplayNumber";
import {useEffect, useState} from "react";
import store from "../store";

const DisplayNumberContainer = () => {

  const [number, setNumber] = useState(store.getState().number);

  useEffect(() => {
    store.subscribe(() => setNumber(store.getState().number))
  }, [store.getState().number]);

  return (
    <DisplayNumber number={number} />
  )
}

export default DisplayNumberContainer;