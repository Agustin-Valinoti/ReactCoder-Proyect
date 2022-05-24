import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import useCartContext from "../store/CartContext";
import Spinner from "./commonComponents/Spinner";

function ItemDetail({ cars }) {
  const { addToCart, intoCart } = useCartContext();

  function onAdd(count) {
    addToCart(cars, count);
  }

  if (cars === undefined) {
    return <Spinner />;
  } else if (cars.type !== 'vehicle') {
    return (
      <div data-theme="emerald" class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={cars.img} alt="Product Image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {cars.brand} {cars.model}
          </h2>
          <p>${cars.price}</p>
          <div class="card-actions justify-end">
            {intoCart(cars.id) ? (
              <h3>
                Agregado al
                <Link className="btn btn-link" to="/cart">
                  CARRITO
                </Link>
              </h3>
            ) : (
              <ItemCounter onAdd={onAdd} stock={cars.stock} initial={1} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <div data-theme="emerald" class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={cars.img} alt="Product Image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {cars.brand} {cars.model}
      </h2>
      <p>${cars.price}</p>
      <div class="card-actions justify-end">
        <button className="btn btn-ghost"> CONTACTANOS </button>
      </div>
    </div>
  </div>
  )}
}

export default ItemDetail;
