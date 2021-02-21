import { Link } from "react-router-dom";
import styled from "styled-components";
import jungle from "../images/Jungle.jpg";

const CagesWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.defaultMargins};
  background-image: url(${jungle});
  background-size: contain;
`;

const AnimalCage = styled.label`
  font-size: 3em;
  border: gray dashed 5px;
  padding: 30px 30px 0 30px;
`;

const Cages = (props) => {
  return (
    <CagesWrapper>
      {props.animals.map((employee) => (
        <Link to={`/cage/${employee.name}`}>
          <AnimalCage>{employee.emoji}</AnimalCage>
        </Link>
      ))}
    </CagesWrapper>
  );
};

export default Cages;
