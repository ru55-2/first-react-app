import { useState, useEffect } from 'react'
import './App.css';
import {styles} from "./styles"
import { functions } from "./functions"



//createing a nav element in react that i can import easily into my app
function Nav() {
  const NavList = ["Home","Admin","New Game"];
  let isAdmin = false;
return(
  <div>
    <ul>
      <li style={styles.list}>
        <button onClick={functions.homebtn}>{NavList[0]}</button>
      </li>
      <li style={styles.list}>
        <button>{NavList[1]}</button>
      </li>
      <li style={styles.list}>
      {isAdmin ? <button>{NavList[2]}</button> : ""}
      </li>
    </ul>
  </div>
);
}

function Table(){
  const [games, setGames] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://leavittservers.xyz/api/basketball/games")
      .then((res) => res.json())
      .then((json) => setGames(json));
  }, []);
  return(
    <div>
      <table>
        <thead>
        <tr>
          <th>Location Of Game</th>
          <th>Home Team</th>
          <th>Guest Team</th>
        </tr>
        </thead>
        <tbody>
        {games.map((game, index) => (
            <tr key={index}>
              <td>{game.Location}</td>
              <td>{game.Team1}</td>
              <td>{game.Team2}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
  );
}





function App() {
  return (
    <div className="App">
      <Nav/>
      <Table/>


      

    </div>
  );
}

export default App;
