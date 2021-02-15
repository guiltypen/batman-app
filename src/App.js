import "./App.css";
import NavbarItem from "./components/NavbarItem";
import Face from "./components/Face";
import Cages from "./components/Cages";
import reactLogos from "./images/reactLogos";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Face frown lala="Hasan" hoho={324} hehe={() => console.log("labas")} />
        <h1>
          <code>Welcome to the zoo!</code>
        </h1>
        <Cages animals={animals} />
        <Cages animals={["🐊", "🐙"]} />

        <div>
          {reactLogos.map((image) => (
            <img src={image} alt="React logo" />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
