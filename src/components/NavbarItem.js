const NavbarItem = (props) => {
  const sayMyName = () => {
    alert(props.text);
  };

  return (
    <button className="App-button" onClick={sayMyName}>
      {props.text}
    </button>
  );
};

export default NavbarItem;
