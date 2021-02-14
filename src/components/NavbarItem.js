const sayMyName = (name) => {
  alert(name);
};

const NavbarItem = (props) => {
  return (
    <button className="App-button" onClick={() => sayMyName(props.text)}>
      {props.text}
    </button>
  );
};

export default NavbarItem;
