import React from "react";
import Spinner from "./commonComponents/Spinner";
import Item from "./Item";

function ItemList({ products, productsId }) {
  if (products === undefined) {
    return <Spinner />;
  } else {
    let sportProd = products.filter((prod) => prod.category === "sport");
    let onoffProd = products.filter((prod) => prod.category === "onoff");
    let helmetProd = products.filter((prod) => prod.category === "helmets");
    let gloveProd = products.filter((prod) => prod.category === "gloves");

    const itemPrint = () => {
      let idSport = sportProd.map((res) => res.category);
      let idOnOff = onoffProd.map((res) => res.category);
      let idHelmet = helmetProd.map((res) => res.category);
      let idGlove = gloveProd.map((res) => res.category);
      if (productsId === idSport[0]) {
        return (
          <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
            <div>
              <h2 className="font-bold text-xl mt-1">Sport</h2>
            </div>
            <div className="flex flex-wrap place-content-center p-8 m-auto">
              {sportProd.map((thisProd) => {
                return <Item product={thisProd} />;
              })}
            </div>
          </div>
        );
      } else if (productsId === idOnOff[0]) {
        return (
          <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
            <div>
              <h2 className="font-bold text-xl mt-1">On-Off</h2>
            </div>
            <div className="flex flex-wrap place-content-center p-8 m-auto">
              {onoffProd.map((thisProd) => {
                return <Item product={thisProd} key={thisProd.id} />;
              })}
            </div>
          </div>
        );
      } else if (productsId === idHelmet[0]) {
        return (
          <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
            <div>
              <h2 className="font-bold text-xl mt-1">Cascos</h2>
            </div>
            <div className="flex flex-wrap place-content-center p-8 m-auto">
              {helmetProd.map((thisProd) => {
                return <Item product={thisProd} key={thisProd.id} />;
              })}
            </div>
          </div>
        );
      } else if (productsId === idGlove[0]) {
        return (
          <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
            <div>
              <h2 className="font-bold text-xl mt-1">Guantes</h2>
            </div>
            <div className="flex flex-wrap place-content-center p-8 m-auto">
              {gloveProd.map((thisProd) => {
                return <Item product={thisProd} key={thisProd.id} />;
              })}
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
              <div>
                <h2 className="font-bold text-xl mt-1">Sport</h2>
              </div>
              <div className="flex flex-wrap place-content-center p-8 m-auto">
                {sportProd.map((thisProd) => {
                  return <Item product={thisProd} />;
                })}
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
              <div>
                <h2 className="font-bold text-xl mt-1">On-Off</h2>
              </div>
              <div className="flex flex-wrap place-content-center p-8 m-auto">
                {onoffProd.map((thisProd) => {
                  return <Item product={thisProd} key={thisProd.id} />;
                })}
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
              <div>
                <h2 className="font-bold text-xl mt-1">Cascos</h2>
              </div>
              <div className="flex flex-wrap place-content-center p-8 m-auto">
                {helmetProd.map((thisProd) => {
                  return <Item product={thisProd} key={thisProd.id} />;
                })}
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center border-2 m-2 bg-slate-600/50">
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
    };
    return (
      <div className="flex flex-wrap place-content-center m-auto">
        {itemPrint()}
      </div>
    );
  }
}

export default ItemList;
