const Face = (props) => {
  console.log(props);

  if (props.smile) {
    return <h1>:)</h1>;
  } else if (props.frown) {
    return <h1>:(</h1>;
  } else {
    return <h1>:|</h1>;
  }
};

export default Face;
