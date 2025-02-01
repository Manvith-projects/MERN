import "./App.css";
import Navbar from './components/Navbar';
import { useState } from 'react';
import Accordian from "./components/Accordian";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert('Button Clicked');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  }
  const handleColorChange = (e) => {
  document.getElementById("col").style.color = e.target.value;
  }
  return (
    <>
      <Navbar title="First"/><br/>
      <Navbar title="second"/><br/>
      <Navbar title="third"/><br/>
      <Accordian/>
      <div>
        <p id="col">Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button><br/><br/>
        <button onClick={() => setCount(count - 1)}>decrement</button><br/><br/>
        <button onClick={handleClick}>hello</button>
        <input type="text" onChange={handleChange}/>
        <input type="color" onChange={handleColorChange}/>
      </div>
    </>
  );
}

export default App;
