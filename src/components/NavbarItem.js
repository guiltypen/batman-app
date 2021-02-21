import { Link } from "react-router-dom";
import { NavbarItemButton } from "./styles";

const NavbarItem = (props) => {
  return (
    <Link to={`/${props.text}`}>
      <NavbarItemButton>{props.text}</NavbarItemButton>
    </Link>
  );
};

export default NavbarItem;
