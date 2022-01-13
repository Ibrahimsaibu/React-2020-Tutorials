import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [humans, setHumans] = useState(data);

  const removeItem = (id) => {
    let newHumans = humans.filter((person) => person.id !== id);
    setHumans(newHumans);
  };
  return (
    <>
      {humans.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setHumans([])}>
        claer items
      </button>
    </>
  );
};

export default UseStateArray;
