import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

const AnimalCage = styled.label`
  font-size: 3em;
  border: gray dashed 5px;
  padding: 30px 30px 0 30px;
`;

const CagePage = (props) => {
  const employees = props.employees;
  const { employeeName } = useParams();

  const employee = employees.find((employee) => employee.name === employeeName);

  if (!employee) {
    return <Redirect to="/404" />;
  }
  return <AnimalCage>{employee.emoji}</AnimalCage>;
};

export default CagePage;
