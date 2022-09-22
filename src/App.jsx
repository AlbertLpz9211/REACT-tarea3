import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setLocation(res.data));
  }, []);

  function seachLocation() {

    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then((res) => setLocation(res.data));
  }

  console.log(location);

  return (
    <div className="App">
      <h1>{location.name}</h1>
      <br />
      <input type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)}/>
      <button onClick={seachLocation}>Search</button>
      {location.residents?.map(charters => (
        <li key={charters}>{charters}</li>
      ))}
    </div>
  );
}

export default App;
