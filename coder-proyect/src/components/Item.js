import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div data-theme="forest" className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img className="" src={product.img} alt="Product Image" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {product.brand} {product.model}
        </h2>
        <div className="card-actions">
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-link">Mas Informacion</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
