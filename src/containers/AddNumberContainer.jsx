import AddNumber from "../components/AddNumber";
import store from "../store"

const AddNumberContainer = () => {
  return <AddNumber onClick={(size) => {
    store.dispatch({type: "INCREMENT", size: size})
  }
  }/>;
};

export default AddNumberContainer;