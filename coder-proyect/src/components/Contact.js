import { useState } from "react";
import Inputs from "./Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function Contact() {
  const [mail, setMail] = useState({ value: "", valid: null });

  const contact = () => {
    swal(
      "Enviado",
      "A la brevedad nos pondremos en contacto.",
      "success"
    )
  }
  const sumbitButton = () => {
    if (mail.valid !== "accepted") {
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
    } else {
      return <Link to="/" onClick={contact} className="btn btn-succes mt-4">ENVIAR</Link>;
    }
  };

  return (
    <div className="flex flex-col items-center place-content-center">
      <h1 className="font-bold mt-6">
        Ingrese su email y el producto en el que esta interesado, al cabo de
        unos dias nos estaremos comunicando con usted.
      </h1>
      <Inputs
        state={mail}
        changeState={setMail}
        label=""
        placeholder="email"
        type="email"
        htmlfor="mail"
        id="mail"
        validation={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
      />
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <textarea
            class="
             form-control
             block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
             "
            rows="3"
            placeholder="Escriba aqui"
          ></textarea>
        </div>
      </div>
      <div className="flex place-content-center">{sumbitButton()}</div>
    </div>
  );
}

export default Contact;
