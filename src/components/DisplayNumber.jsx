import store from "../store"
import {useEffect, useState} from "react";

const DisplayNumber = () => {

  // const [number, setNumber] = useState(store.getState().number);
  const [number, setNumber] = useState(store.getState().number);

  useEffect(() => {
    store.subscribe(() => setNumber(store.getState().number))
  }, [store.getState().number]);

  return (
    <div>
      <h1>Display Number</h1>
      <input readOnly type={"text"} value={number}/>
    </div>
  );
};

export default DisplayNumber;