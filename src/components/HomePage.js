import Face from "./Face";
import Cages from "./Cages";

const HomePage = (props) => {
  return (
    <>
      <Face frown lala="Hasan" hoho={324} hehe={() => console.log("labas")} />
      <h1>
        <code>Welcome to the zoo!</code>
      </h1>
      <Cages animals={props.animals} />
    </>
  );
};

export default HomePage;
