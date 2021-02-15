import styled from "styled-components";

const CagesWrapper = styled.div`
  margin-bottom: 30px;
`;

const AnimalCage = styled.label`
  font-size: 3em;
  border: gray dashed 5px;
  padding: 30px 30px 0 30px;
`;

const Cages = (props) => {
  return (
    <CagesWrapper>
      {props.animals.map((animal) => (
        <AnimalCage>{animal}</AnimalCage>
      ))}
    </CagesWrapper>
  );
};

export default Cages;
