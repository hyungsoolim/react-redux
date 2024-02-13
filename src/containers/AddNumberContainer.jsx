import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

// const mapReduxStateToReactProps = () => {
//
// }
//
const mapDispatchToReactProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({type: "INCREMENT", size: size})
    }
  }
}

export default connect(null, mapDispatchToReactProps)(AddNumber);
// import store from "../store"
//
// const AddNumberContainer = () => {
//   return <AddNumber onClick={(size) => {
//     store.dispatch({type: "INCREMENT", size: size})
//   }
//   }/>;
// };
//
// export default AddNumberContainer;