import { useState } from "react";
import "./App.css";
import { Instructions } from "./components/Instructions";

function App() {
  const [price, setprice] = useState(100);

  function handleprice() {
    setprice(75);
    console.log(price);
  }

  return (
    <>
      <section id="instructions">
        <Instructions />
      </section>

      <div>
        <p data-testid="price">${price}</p>
        <button onClick={handleprice}>Apply Discount</button>
      </div>
    </>
  );
}

export default App;
