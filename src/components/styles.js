import styled from "styled-components";

export const NavbarItemButton = styled.button`
  background-color: ${(props) => props.theme.lightBackground};
  margin-left: 5px;
  border: none;
  padding: 10px;
  font-size: medium;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SomethingElse = styled.button`
  background-color: salmon;
  margin-left: 5px;
  border: none;
  padding: 10px;
  font-size: medium;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default styled.div`
  background-color: red;
`;
