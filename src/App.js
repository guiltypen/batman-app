import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NavbarItem from "./components/NavbarItem";
import CagePage from "./components/CagePage";

// const animals = ["🦍", "🐘", "🦆", "🦒", "🐅", "🐦", "🦜", "🦈"];

const employees = [
  {
    name: "hasan",
    emoji: "🦍",
  },
  {
    name: "fawaz",
    emoji: "👨🏻‍💻",
  },
];

const navbarItems = ["Home", "About", "Contact", "Blog", "Shop", "Something"];

const App = () => {
  return (
    <div className="App">
      <div className="App-navbar">
        <h3>The Batman App</h3>
        <div>
          {navbarItems.map((item) => (
            <NavbarItem text={item} key={item} />
          ))}
        </div>
      </div>
      <header className="App-header">
        <Switch>
          <Route path="/" exact>
            <HomePage animals={employees} />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/contact" exact>
            <h1>Contact</h1>
          </Route>
          <Route path="/blog" exact>
            <h1>Blog</h1>
          </Route>

          <Route path="/cage/:employeeName">
            <CagePage employees={employees} />
          </Route>
          <Route path="/cage">
            <Redirect to="/cage/empty" />
          </Route>

          <Route path="/404" exact>
            <h1>404</h1>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
