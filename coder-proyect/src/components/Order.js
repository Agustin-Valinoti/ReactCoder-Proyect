import React, {useState} from "react";

function Order({ detail }) {
  const itemsBuyed = [...detail.items]
  return (
    <div className="border-4 border-green-900 bg-green-800 m-4 rounded">
      <div className="flex space-x-96 font-bold m-2 border-2 rounded items-center place-content-center border-lime-900 bg-slate-200">
        <h1>DETALLE DE COMPRA</h1>
        <h3 className="text-right mb-2">
          ID de su compra <br />
          <span className="p-1 rounded">{detail.id}</span>
        </h3>
      </div>
      <div className="flex flex-col font-bold border-2 rounded m-2 items-center place-content-center border-lime-900 bg-slate-200">
        <h3 className="m-6">Informacion Comprador</h3>
        <div>
          <ul className="flex space-x-40">
            <li className="m-4">
              <p>Nombre: {detail.buyer.name.toUpperCase()} {detail.buyer.lastname.toUpperCase()}</p>
            </li>
            <li className="m-4">
                DNI: {detail.buyer.dni}
            </li>
            <li className="m-4">
                Email: {detail.buyer.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex place-content-center flex-wrap">
          { itemsBuyed.map( (thisItems) => {
              return (
                  <div className="flex flex-col font-bold border-2 rounded m-2 items-center place-content-center space-y-4 my-5 p-5 border-lime-900 bg-slate-200">
                      <h1>PRODUCTO</h1>
                      <h3>{thisItems.brand} {thisItems.model} </h3>
                      <h5>Cantidad: {thisItems.cant}</h5>
                      <h5>Total: {thisItems.price}</h5>
                  </div>
              )
          } ) }
      </div>
      <div className="font-bold border-2 rounded m-2 items-center place-content-center space-y-4 my-5 p-5 border-lime-900 bg-slate-200">
          <h1 className="text-3xl text-center">TOTAL: ${detail.total}</h1>
      </div>
    </div>
  );
}

export default Order;
