import DisplayNumber from "../components/DisplayNumber";
// import {useEffect, useState} from "react";
// import store from "../store";
import {connect} from "react-redux";

export default connect()(DisplayNumber);


// const DisplayNumberContainer = () => {
//
//   const [number, setNumber] = useState(store.getState().number);
//
//   useEffect(() => {
//     store.subscribe(() => setNumber(store.getState().number))
//   }, [store.getState().number]);
//
//   return (
//     <DisplayNumber number={number} />
//   )
// }

// export default DisplayNumberContainer;