import AddNumber from "./AddNumber";

const AddNumberRoot = ({handleOnClick}) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber handleOnClick={(size) => {
        handleOnClick(size);
      }}/>
    </div>
  )
}

export default AddNumberRoot;