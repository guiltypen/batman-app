import "./App.css";
import NavbarItem from "./components/NavbarItem";

const App = () => {
  return (
    <div className="App">
      <div className="App-navbar">
        <h3>The Batman App</h3>
        <div>
          <NavbarItem text="Home" />
          <NavbarItem text="About" />
          <NavbarItem text="Contact" />
          <NavbarItem text="Blog" />
          <NavbarItem text="Shop" />
          <NavbarItem text="Something" />
        </div>
      </div>
      <header className="App-header">
        <h1>Welcome to React!</h1>
      </header>
    </div>
  );
};

export default App;
