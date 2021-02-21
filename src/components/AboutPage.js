import { useState } from "react";

const stock = 7;

const AboutPage = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter === stock) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment} disabled={counter === stock}>
        PLUS
      </button>
      <button onClick={decrement} disabled={counter === 0}>
        MINUS
      </button>
    </>
  );
};

export default AboutPage;
