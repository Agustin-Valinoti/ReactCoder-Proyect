import data from "../data/data.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function getCars(categoryid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryid) {
        const ArrayFilter = data.filter((cars) => {
          return cars.brand === categoryid;
        });
        resolve(ArrayFilter);
      } else {
        resolve(data);
      }
    }, 1000);
  });
}

function ItemListContainer() {
  const [cars, setCars] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getCars(categoryid).then((resPromise) => {
      setCars(resPromise);
    });
  }, [categoryid]);

  return (
    <div className="flex place-content-center mt-32 p-12">
      <ItemList cars={cars} />
    </div>
  );
}

export default ItemListContainer;
