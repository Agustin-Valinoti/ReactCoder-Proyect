import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";
import DeleteButton from "./DeleteButton";

function CartPage() {
  const { clearCart, cart, removeFromCart } = useCartContext();
  
  const cartPrint = cart.map((item) => {

    function onSubstract () {
      removeFromCart(item.id)
    }

    const totalPrice = item.cant * item.price

    return (
      <li key={cart.id}>
        <Link className="hover:text-indigo-700" to={`/car/${item.id}`}> <span>{item.brand} {item.model} </span> </Link>
        <span>x {item.cant} = </span>
        <span>USD ${totalPrice}</span>
        <DeleteButton onSubstract={onSubstract}/>
      </li>
    );
  });
  
  
  return (
    <div>
      <div>
        <ul>{cartPrint}</ul>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <button
          onClick={clearCart}
          className="
           mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal
           uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg
           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
           "
        >
          Borrar Todo
        </button>
      </div>
    </div>
  );
}

export default CartPage;
