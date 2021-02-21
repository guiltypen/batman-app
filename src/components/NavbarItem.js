import { NavbarItemButton } from "./styles";

const NavbarItem = (props) => {
  const goToPage = () => {
    props.setPage(props.text);
  };

  return <NavbarItemButton onClick={goToPage}>{props.text}</NavbarItemButton>;
};

export default NavbarItem;
