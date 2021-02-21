import { useState } from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NavbarItem from "./components/NavbarItem";

const animals = ["🦍", "🐘", "🦆", "🦒", "🐅", "🐦", "🦜", "🦈"];
const navbarItems = ["Home", "About", "Contact", "Blog", "Shop", "Something"];

const App = () => {
  const [page, setPage] = useState("Home");
  // const pageState = useState("Home");
  // const page = pageState[0]
  // const setPage = pageState[1]

  const CurrentPage = () => {
    if (page === "Home") return <HomePage animals={animals} />;
    else if (page === "About") return <AboutPage />;
    else if (page === "Contact") return <h1>Contact</h1>;
    else if (page === "Blog") return <h1>Blog</h1>;
    else return <h1>404</h1>;
  };

  return (
    <div className="App">
      <div className="App-navbar">
        <h3>The Batman App</h3>
        <div>
          {navbarItems.map((item) => (
            <NavbarItem text={item} setPage={setPage} />
          ))}
        </div>
      </div>
      <header className="App-header">
        <CurrentPage />
      </header>
    </div>
  );
};

export default App;
