import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Location = (location) => {
  //   definicion de los estados
  const [location, setLocation] = useState({});

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  return (
    <li className="location-item">
      <div className="location-card">
        {location.name}
        <br />
      </div>
    </li>
  );
};

export default Location;
