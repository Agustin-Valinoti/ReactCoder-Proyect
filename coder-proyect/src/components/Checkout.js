import { useState } from "react";
import Inputs from "./Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";
import { createBuyOrder } from "../data/dbase";
import swal from "sweetalert";

function Checkout() {
  const { cart, clearCart, getTotalPrice } = useCartContext();

  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [mail, setMail] = useState({ value: "", valid: null });
  const [dniNumber, setDniNumber] = useState({ value: "", valid: null });

  const sumbitButton = () => {
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
          name: name.value,
          lastname: lastName.value,
          email: mail.value,
          dni: dniNumber.value,
        },
        items: itemBuy,
        total: getTotalPrice(),
      };
      createBuyOrder(buyOrder)
        .then(clearCart)
        .then(
          swal(
            "Finalizado",
            "Muchas gracias por confiar en nosotros. Podras ver el resumen de tu compra en la seccion de compras con tu DNI. Pronto recibiras un Mail para proceder con el pago.",
            "success"
          )
        );
      return;
    };

    if (name.valid !== "accepted") {
      return (
        <div className="flex flex-col items-center pt-4">
          <button class="btn" disabled="disabled">
            ENVIAR
          </button>
          <div className="flex items-center rounded p-2 mt-2 bg-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="pr-2" />
            <p className="font-bold">Nombre no valido.</p>
          </div>
        </div>
      );
    } else if (lastName.valid !== "accepted") {
      return (
        <div className="flex flex-col items-center pt-4">
          <button class="btn" disabled="disabled">
            ENVIAR
          </button>
          <div className="flex items-center rounded p-2 mt-2 bg-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="pr-2" />
            <p className="font-bold">Apellido no valido.</p>
          </div>
        </div>
      );
    } else if (mail.valid !== "accepted") {
      return (
        <div className="flex flex-col items-center pt-4">
          <button class="btn" disabled="disabled">
            ENVIAR
          </button>
          <div className="flex items-center rounded p-2 mt-2 bg-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="pr-2" />
            <p className="font-bold">Email no valido.</p>
          </div>
        </div>
      );
    } else if (dniNumber.valid !== "accepted") {
      return (
        <div className="flex flex-col items-center pt-4">
          <button class="btn" disabled="disabled">
            ENVIAR
          </button>
          <div className="flex items-center rounded p-2 mt-2 bg-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="pr-2" />
            <p className="font-bold">DNI no valido.</p>
          </div>
        </div>
      );
    } else {
      return (
        <button onClick={finishCart} className="btn btn-succes mt-4">
          ENVIAR
        </button>
      );
    }
  };

  return (
    <div className="flex flex-col">
      <form className="flex relative flex-wrap">
        <Inputs
          state={name}
          setState={setName}
          label="Nombre"
          placeholder="nombre"
          type="text"
          htmlfor="name"
          id="name"
          validation={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
        />
        <Inputs
          state={lastName}
          setState={setLastName}
          label="Apellido"
          placeholder="apellido"
          type="text"
          htmlfor="lastname"
          id="lastname"
          validation={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
        />
        <Inputs
          state={mail}
          setState={setMail}
          label="Email"
          placeholder="email"
          type="email"
          htmlfor="mail"
          id="mail"
          validation={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />
        <Inputs
          state={dniNumber}
          setState={setDniNumber}
          label="DNI"
          placeholder="DNI"
          type="text"
          htmlfor="dni"
          id="dni"
          validation={/^\d{8}$/}
        />
      </form>
      <div className="flex place-content-center">{sumbitButton()}</div>
    </div>
  );
}

export default Checkout;
