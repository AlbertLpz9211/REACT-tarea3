import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ResidentsTarjet = ({ characterUrl }) => {
  const [tarjet, setTarjet] = useState("");
  useEffect(() => {
    axios
      .get(`${characterUrl}`)
      .then((res) => setTarjet(res.data))
      .catch((r) => console.log(r));
  }, []);

  console.log(characterUrl);

  return (
    <div className="card-item">
      <div className="card">
        <h2>{tarjet?.name}</h2>
        <img src={tarjet.image} alt="" />
        <h3>Raza: {tarjet.species} </h3>
        <h3>Genero: {tarjet.gender}</h3>
        <h3>Origen: {tarjet.origin?.name}</h3>
        <h3>Aparicion en episodios: {tarjet.episode?.length}</h3>
      </div>
    </div>
  );
};

export default ResidentsTarjet;
