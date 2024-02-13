const DisplayNumber = ({number}) => {

  return (
    <div>
      <h1>Display Number</h1>
      <input readOnly type={"text"} value={number}/>
    </div>
  );
};

export default DisplayNumber;