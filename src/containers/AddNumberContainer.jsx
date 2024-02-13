import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

export default connect()(AddNumber);
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