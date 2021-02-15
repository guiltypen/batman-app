import { NavbarItemButton } from "./styles";

const NavbarItem = (props) => {
  const sayMyName = () => {
    alert(props.text);
  };

  return <NavbarItemButton onClick={sayMyName}>{props.text}</NavbarItemButton>;
};

export default NavbarItem;
