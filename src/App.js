import "./App.css";
import NavbarItem from "./components/NavbarItem";
import Face from "./components/Face";
import Cages from "./components/Cages";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";

const imgs = [img1, img2, img3, img4];
const animals = ["🦍", "🐘", "🦆", "🦒", "🐅", "🐦", "🦜", "🦈"];
const navbarItems = ["Home", "About", "Contact", "Blog", "Shop", "Something"];

const App = () => {
  return (
    <div className="App">
      <div className="App-navbar">
        <h3>The Batman App</h3>
        <div>
          {navbarItems.map((item) => (
            <NavbarItem text={item} />
          ))}
        </div>
      </div>
      <header className="App-header">
        <Face frown lala="Hasan" hoho={324} hehe={() => console.log("labas")} />
        <h1>
          <code>Welcome to the zoo!</code>
        </h1>
        <Cages animals={animals} />
        <Cages animals={["🐊", "🐙"]} />

        <div>
          {imgs.map((image) => (
            <img src={image} alt="React logo" />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
