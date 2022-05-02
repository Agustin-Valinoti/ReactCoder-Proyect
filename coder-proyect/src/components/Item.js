import React from "react";
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom";

function Item({ car }) {
  return (
    <div className="flex flex-col m-5 p-12 border-2 rounded-lg backdrop-sepia">
      <div className="pb-5">
        <h1 className="text-2xl">{car.brand}</h1>
        <p>
          {car.model}
        </p>
        <img className="h-32 w-48" src={car.img} alt="Product Image" />
      </div>
      <Link to={`/car/${car.id}`}>
        <button className="hover:text-indigo-700">Mas Informacion</button>
      </Link>
    </div>
  );
}

export default Item;
