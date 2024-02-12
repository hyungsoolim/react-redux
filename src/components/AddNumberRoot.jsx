import AddNumberContainer from "../containers/AddNumberContainer";

const AddNumberRoot = ({handleOnClick}) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumberContainer handleOnClick={(size) => {
        handleOnClick(size);
      }}/>
    </div>
  )
}

export default AddNumberRoot;