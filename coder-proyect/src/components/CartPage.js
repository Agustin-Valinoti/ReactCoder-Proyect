import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";
import DeleteButton from "./DeleteButton";
import { createBuyOrder } from "../data/dbase";

function CartPage() {
  const { clearCart, cart, removeFromCart, getTotalPrice } = useCartContext();

  const cartPrint = cart.map((item) => {
    function onSubstract() {
      removeFromCart(item.id);
    }

    return (
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr key={cart.id}>
              <th>•</th>
              <td className="">
                <Link className="btn btn-link w-36" to={`/car/${item.id}`}>
                  <span>
                    {item.brand} {item.model}
                  </span>
                </Link>
              </td>
              <td>{item.cant}</td>
              <td>${item.cant * item.price}</td>
              <td>
                <DeleteButton onSubstract={onSubstract} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h3 className="mt-32">No has agregado productos</h3>
        <Link className="absolute mb-16 inset-x-0 bottom-0" to="/">
          <button data-theme="emerald" class="btn btn-wide">
            Volver al Inicio
          </button>
        </Link>
      </div>
    );
  } else {
    const finishCart = () => {
      const itemBuy = cart.map((item) => ({
        id: item.id,
        brand: item.brand,
        model: item.model,
        price: item.price,
        cant: item.cant,
      }));
      const buyOrder = {
        buyer: {
          name: "Coderhouse",
          phone: 3511234567,
          email: "coder@gmail.com",
        },
        items: itemBuy,
        total: getTotalPrice(),
      };
      createBuyOrder(buyOrder).then(clearCart)
    };

    return (
      <div data-theme="emerald">
        <div>
          <ul>{cartPrint}</ul>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <button
            for="my-modal"
            onClick={finishCart}
            className="
           mb-2 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-normal
           uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg
           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
           "
          >
              FINALIZAR COMPRA         
          </button>
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
}

export default CartPage;
