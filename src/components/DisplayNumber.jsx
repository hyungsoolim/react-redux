const DisplayNumber = ({number, unit}) => {

  return (
    <div>
      <h1>Display Number</h1>
      <input readOnly type={"text"} value={number}/>
      {unit}
    </div>
  );
};

export default DisplayNumber;