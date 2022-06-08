import React from "react";
import Spinner from "./commonComponents/Spinner";
import Item from "./Item";
import Slider from "./Slider";

function ItemList({ products }) {
  if (products === undefined) {
    return <Spinner />;
  } else {
    let sportProd = products.filter((prod) => prod.category === "sport");
    let onoffProd = products.filter((prod) => prod.category === "onoff");
    let helmetProd = products.filter((prod) => prod.category === "helmets");
    let gloveProd = products.filter((prod) => prod.category === "gloves");

    return (
      <div className="flex flex-wrap place-content-center m-auto">
        <div className="flex flex-col flex-wrap items-center border-2 m-2">
          <div>
            <h2 className="font-bold text-xl mt-1">Sport</h2>
          </div>
          <div className="flex flex-wrap place-content-center p-8 m-auto">
            {sportProd.map((thisProd) => {
              return <Item product={thisProd} />;
            })}
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center border-2 m-2">
        <div>
            <h2 className="font-bold text-xl mt-1">On-Off</h2>
          </div>
          <div className="flex flex-wrap place-content-center p-8 m-auto">
            {onoffProd.map((thisProd) => {
              return <Item product={thisProd} key={thisProd.id} />;
            })}
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center border-2 m-2">
        <div>
            <h2 className="font-bold text-xl mt-1">Cascos</h2>
          </div>
          <div className="flex flex-wrap place-content-center p-8 m-auto">
            {helmetProd.map((thisProd) => {
              return <Item product={thisProd} key={thisProd.id} />;
            })}
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center border-2 m-2">
        <div>
            <h2 className="font-bold text-xl mt-1">Guantes</h2>
          </div>
          <div className="flex flex-wrap place-content-center p-8 m-auto">
            {gloveProd.map((thisProd) => {
              return <Item product={thisProd} key={thisProd.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
