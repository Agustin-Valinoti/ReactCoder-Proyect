import React, { useState } from "react";
import Inputs from "./Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Order from "./Order";

function OrdersDetail({ orders }) {
  const [detail, setDetail] = useState();
  const [dniNumber, setDniNumber] = useState({ value: "", valid: null });

  const handleSearch = () => {
    const finalOrder = orders.filter((p) => p.buyer.dni === dniNumber.value);
    setDetail(finalOrder);
  };

  const searchButton = () => {
    if (dniNumber.valid !== "accepted") {
      return (
        <div className="flex flex-col items-center pt-4">
          <button class="btn" disabled="disabled">
            BUSCAR
          </button>
          <div className="flex items-center rounded p-2 mt-2 bg-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="pr-2" />
            <p className="font-bold">DNI no valido.</p>
          </div>
        </div>
      );
    } else {
      return (
        <button onClick={handleSearch} className="btn btn-primary p-2 mt-2">
          BUSCAR
        </button>
      );
    }
  };

  if (detail === undefined) {
    return (
      <div className="flex flex-col items-center place-content-center">
        <div className="font-bold m-8">
          <h2>Ingrese su DNI para buscar su orden de compra.</h2>
        </div>
        <Inputs
          state={dniNumber}
          changeState={setDniNumber}
          placeholder="DNI"
          type="text"
          htmlfor="dni"
          id="dni"
          validation={/^\d{8}$/}
        />
        <div>{searchButton()}</div>
      </div>
    );
  } else if (detail.length === 0) {
    return (
      <div className="flex flex-col items-center place-content-center">
        <div className="font-bold m-8 mb-2 text-center bg-error p-1 rounded">
          <h2> No existe ninguna compra con el DNI ingresado</h2>
          <h3>Por favor, ingrese un nuevo DNI</h3>
        </div>
        <Inputs
          state={dniNumber}
          changeState={setDniNumber}
          placeholder="DNI"
          type="text"
          htmlfor="dni"
          id="dni"
          validation={/^\d{8}$/}
        />
        <div>{searchButton()}</div>
      </div>
    );
  } else {
    return (
      <div>
        {detail.map( (thisOrder) => {
          return <Order detail={thisOrder} key={thisOrder.id}/>
        } )}
      </div>
    )
  }
}

export default OrdersDetail;
