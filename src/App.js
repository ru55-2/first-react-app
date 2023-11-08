import { useState } from 'react'
import './App.css';
import {styles} from "./styles"



//createing a nav element in react that i can import easily into my app
function Nav() {
  const NavList = ["Home","Admin","New Game"];
  let isAdmin = false;
return(
  <ul>
    <li style={styles.list}>
      <button>{NavList[0]}</button>
    </li>
    <li style={styles.list}>
      <button>{NavList[1]}</button>
    </li>
    <li style={styles.list}>
    {isAdmin ? <button>{NavList[2]}</button> : ""}
    </li>
  </ul>
);
}




function App() {
  const[counter, setCounter] = useState(0);


  return (
    <div className="App">
      <Nav/>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
