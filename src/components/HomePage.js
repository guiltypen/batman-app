import Face from "./Face";
import Cages from "./Cages";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";

const imgs = [img1, img2, img3, img4];

const HomePage = (props) => {
  return (
    <>
      <Face frown lala="Hasan" hoho={324} hehe={() => console.log("labas")} />
      <h1>
        <code>Welcome to the zoo!</code>
      </h1>
      <Cages animals={props.animals} />
      <Cages animals={["🐊", "🐙"]} />

      <div>
        {imgs.map((image) => (
          <img src={image} alt="React logo" />
        ))}
      </div>
    </>
  );
};

export default HomePage;
