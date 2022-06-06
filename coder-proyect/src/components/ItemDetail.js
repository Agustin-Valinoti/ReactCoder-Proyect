import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import useCartContext from "../store/CartContext";
import Spinner from "./commonComponents/Spinner";

function ItemDetail({ products }) {
  const { addToCart, intoCart } = useCartContext();

  function onAdd(count) {
    addToCart(products, count);
  }

  if (products === undefined) {
    return <Spinner />;
  } else if (products.type !== 'vehicle') {
    return (
      <div data-theme="forest" class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={products.img} alt="Product Image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {products.brand} {products.model}
          </h2>
          <p>${products.price}</p>
          <div class="card-actions justify-end">
            {intoCart(products.id) ? (
              <h3>
                Agregado al
                <Link className="btn btn-link" to="/cart">
                  CARRITO
                </Link>
              </h3>
            ) : (
              <ItemCounter onAdd={onAdd} stock={products.stock} initial={1} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <div data-theme="forest" class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={products.img} alt="Product Image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {products.brand} {products.model}
      </h2>
      <p>${products.price}</p>
      <div class="card-actions justify-end">
        <Link to="/contact" className="btn btn-ghost"> CONTACTANOS </Link>
      </div>
    </div>
  </div>
  )}
}

export default ItemDetail;
