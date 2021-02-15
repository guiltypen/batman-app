import "./App.css";
import NavbarItem from "./components/NavbarItem";
import Face from "./components/Face";
import Cages from "./components/Cages";

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
        <h1>Welcome to the zoo!</h1>
        <Cages animals={animals} />
        <Cages animals={["🐊", "🐙"]} />
      </header>
    </div>
  );
};

export default App;
