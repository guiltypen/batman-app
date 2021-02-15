const Cages = (props) => {
  return (
    <div style={{ marginBottom: 30 }}>
      {props.animals.map((animal) => (
        <label className="App-animal">{animal}</label>
      ))}
    </div>
  );
};

export default Cages;
