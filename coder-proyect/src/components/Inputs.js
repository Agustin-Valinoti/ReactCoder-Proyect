import React from "react";

function Inputs( { label, placeholder, htmlfor, id, type, state, changeState, validation } ) {
  const change = (e) => {
    changeState( {...state, value: e.target.value} )
  }

  const validate = () => {
      if(validation){
          if(validation.test(state.value)){
            changeState( {...state, valid: 'accepted'} );
          } else {
            changeState( {...state, valid: 'denied'} );
          }
      }
  }
  
  if (state.valid === 'accepted'){
    return (
    <div>
      <div className="relative flex flex-col m-4 appearance-none">
        <label className="m-2 ml-0" htmlFor={htmlfor}>
          {label}
        </label>
        <input
          className="border-2 rounded p-0.5 focus:outline-none focus:border-2 focus:border-blue-600 border-green-600"
          type={type}
          placeholder={placeholder}
          id={id}
          value={state.value}
          onChange={change}
          onKeyUp={validate}
          onBlur={validate}
        />
      </div>
    </div>
  );} else {
      return (
        <div>
        <div className="relative flex flex-col m-4 appearance-none">
          <label className="m-2 ml-0" htmlFor={htmlfor}>
            {label}
          </label>
          <input
            className="border-2 rounded p-0.5 focus:outline-none focus:border-2 focus:border-blue-600 border-red-600"
            type={type}
            placeholder={placeholder}
            id={id}
            value={state.value}
            onChange={change}
            onKeyUp={validate}
            onBlur={validate}
          />
        </div>
      </div>
      )
  }
}

export default Inputs;
